'use client';

import { useLanguage } from '@/components/language-provider';

const aboutCopy = {
  en: {
    intro: [
      'English Word Roots is a curated atlas of etymology that reveals how families of words grow from the same core meanings.',
      'We catalogue Latin, Greek, and hybrid roots, document their semantic branches, and connect them to modern vocabulary so you can recognize patterns faster.',
    ],
    pillars: [
      {
        title: 'Comprehensive root map',
        description:
          'We trace every major root, variant, and affix so you can compare how thousands of English words share DNA.',
      },
      {
        title: 'Transparent explanations',
        description:
          'Each entry highlights pronunciation, literal meaning, and representative derivatives with concise context.',
      },
      {
        title: 'Learner-first design',
        description:
          'Responsive layouts, bilingual copy, and a calm palette keep the reading experience modern and focused.',
      },
    ],
    processTitle: 'How we build clarity',
    process: [
      {
        title: 'Collect trusted sources',
        description: 'Classical etymology references, corpora, and pedagogical dictionaries form our baseline.',
      },
      {
        title: 'Model relationships',
        description:
          'Metadata links every root to its derived words, semantic domains, and difficulty levels for smarter navigation.',
      },
      {
        title: 'Guide the next step',
        description:
          'Each page points back to the roots index so you can continue exploring connected families without losing context.',
      },
    ],
    closing:
      'Our aim is to make the relationship between roots and words as clear as possible, helping you understand and remember vocabulary with confidence.',
  },
  zh: {
    intro: [
      'English Word Roots 是一份精心整理的词源导图，展示大量英语词汇如何从相同的核心意义延伸出来。',
      '我们尽可能完整地纳入拉丁语、希腊语及其混合词根，记录语义分支，并与现代词汇建立关联，帮助你迅速识别规律。',
    ],
    pillars: [
      {
        title: '尽可能全面的词根库',
        description: '覆盖常见词根、变体与词缀，方便对照成千上万个单词之间的血缘关系。',
      },
      {
        title: '清晰透明的讲解',
        description: '每条词根都提供读音、字面含义和代表性单词，配合简洁说明，便于理解。',
      },
      {
        title: '面向学习者的设计',
        description: '响应式排版、双语文案与柔和配色，为现代化的阅读体验保驾护航。',
      },
    ],
    processTitle: '我们如何梳理关系',
    process: [
      {
        title: '汇集可靠资料',
        description: '以经典词源书、语料库和教学词典为基础，保证数据可信。',
      },
      {
        title: '搭建关联网',
        description: '通过元数据把每个词根与衍生词、语义领域和难度分级串联起来，便于跳转。',
      },
      {
        title: '引导下一步',
        description: '所有内容都会指向词根索引，帮助你在同源家族之间持续探索而不迷路。',
      },
    ],
    closing: '我们的目标是把词根与单词之间的关系梳理得既全面又清楚，让记忆真正建立在理解之上。',
  },
} as const;

export const AboutSection = () => {
  const { dictionary, locale } = useLanguage();
  const localeCopy = aboutCopy[locale as keyof typeof aboutCopy] ?? aboutCopy.en;

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand">Etymology</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          {dictionary.aboutTitle}
        </h1>
        <p className="text-lg text-muted-foreground">{dictionary.aboutMission}</p>
      </header>
      <section className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
        {localeCopy.intro.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {localeCopy.pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-border bg-background p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </section>
      <section className="space-y-4 rounded-2xl border border-border bg-gradient-to-br from-background to-surface p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-foreground">{localeCopy.processTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {localeCopy.process.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/70 bg-background/70 p-4">
              <p className="text-base font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-border bg-surface/80 p-6 shadow-sm">
        <p className="text-base text-muted-foreground">{localeCopy.closing}</p>
      </section>
    </article>
  );
};
