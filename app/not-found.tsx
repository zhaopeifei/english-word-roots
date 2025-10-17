import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-semibold text-foreground">Page not found</h1>
      <p className="text-muted-foreground">We could not locate the requested word root entry.</p>
      <div className="flex justify-center gap-4">
        <Link href="/home" className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white">
          Return home
        </Link>
        <Link
          href="/explore"
          className="rounded-md border border-brand px-4 py-2 text-sm font-medium text-brand"
        >
          Explore catalog
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
