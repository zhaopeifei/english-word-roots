'use client';

import { useLanguage } from '@/components/language-provider';

const PAGE_SIZE = 30;

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | 'ellipsis')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('ellipsis');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('ellipsis');
  pages.push(total);
  return pages;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const { dictionary } = useLanguage();

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex flex-col items-center gap-3 pt-2">
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
        >
          {dictionary.previousPage}
        </button>

        {getPageNumbers(currentPage, totalPages).map((page, i) =>
          page === 'ellipsis' ? (
            <span key={`e${i}`} className="px-1 text-muted-foreground">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
        >
          {dictionary.nextPage}
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        {dictionary.pageOf
          .replace('{current}', String(currentPage))
          .replace('{total}', String(totalPages))}
      </p>
    </nav>
  );
}

export { PAGE_SIZE };
