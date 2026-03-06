'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useAuth } from '@/components/auth-provider';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

/** Tracked statuses stored in DB */
export type MasteryStatus = 'unknown' | 'seen' | 'familiar' | 'mastered';
/** Includes the default unmarked state (not stored in DB) */
export type MasteryStatusOrUnmarked = MasteryStatus | 'unmarked';
export type ItemType = 'word' | 'root';

interface MasteryMap {
  [slug: string]: MasteryStatus;
}

interface MasteryContext {
  getStatus: (type: ItemType, slug: string) => MasteryStatusOrUnmarked;
  setStatus: (type: ItemType, slug: string, status: MasteryStatus) => void;
  clearStatus: (type: ItemType, slug: string) => void;
  wordMap: MasteryMap;
  rootMap: MasteryMap;
  isLoading: boolean;
}

const MasteryContext = createContext<MasteryContext>({
  getStatus: () => 'unmarked',
  setStatus: () => {},
  clearStatus: () => {},
  wordMap: {},
  rootMap: {},
  isLoading: false,
});

export const useMastery = () => useContext(MasteryContext);

export const MasteryProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [wordMap, setWordMap] = useState<MasteryMap>({});
  const [rootMap, setRootMap] = useState<MasteryMap>({});
  const [isLoading, setIsLoading] = useState(false);

  const supabase = useMemo(() => getSupabaseBrowserClient(), []);

  // Fetch all mastery data when user logs in
  useEffect(() => {
    if (!user) {
      setWordMap({});
      setRootMap({});
      return;
    }

    setIsLoading(true);
    supabase
      .from('user_mastery')
      .select('item_type, slug, status')
      .eq('user_id', user.id)
      .then(({ data, error }) => {
        if (error) {
          console.error('Failed to fetch mastery data:', error);
          setIsLoading(false);
          return;
        }
        const words: MasteryMap = {};
        const roots: MasteryMap = {};
        for (const row of data ?? []) {
          if (row.item_type === 'word') words[row.slug] = row.status as MasteryStatus;
          else if (row.item_type === 'root') roots[row.slug] = row.status as MasteryStatus;
        }
        setWordMap(words);
        setRootMap(roots);
        setIsLoading(false);
      });
  }, [user, supabase]);

  const getStatus = useCallback(
    (type: ItemType, slug: string): MasteryStatusOrUnmarked => {
      const map = type === 'word' ? wordMap : rootMap;
      return map[slug] ?? 'unmarked';
    },
    [wordMap, rootMap],
  );

  const setStatus = useCallback(
    (type: ItemType, slug: string, status: MasteryStatus) => {
      if (!user) return;

      // Optimistic update
      const setter = type === 'word' ? setWordMap : setRootMap;
      setter((prev) => ({ ...prev, [slug]: status }));
      // Upsert to DB
      supabase
        .from('user_mastery')
        .upsert(
          { user_id: user.id, item_type: type, slug, status, updated_at: new Date().toISOString() },
          { onConflict: 'user_id,item_type,slug' },
        )
        .then(({ error }) => {
          if (error) console.error('Failed to upsert mastery:', error);
        });
    },
    [user, supabase],
  );

  const clearStatus = useCallback(
    (type: ItemType, slug: string) => {
      if (!user) return;

      const setter = type === 'word' ? setWordMap : setRootMap;
      setter((prev) => {
        const next = { ...prev };
        delete next[slug];
        return next;
      });
      // Delete from DB
      supabase
        .from('user_mastery')
        .delete()
        .eq('user_id', user.id)
        .eq('item_type', type)
        .eq('slug', slug)
        .then(({ error }) => {
          if (error) console.error('Failed to delete mastery:', error);
        });
    },
    [user, supabase],
  );

  const value = useMemo(
    () => ({ getStatus, setStatus, clearStatus, wordMap, rootMap, isLoading }),
    [getStatus, setStatus, clearStatus, wordMap, rootMap, isLoading],
  );

  return <MasteryContext.Provider value={value}>{children}</MasteryContext.Provider>;
};
