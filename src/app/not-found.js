import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-medium tracking-tighter text-foreground">
        404
      </h1>
      <p className="text-sm text-muted-foreground max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-2 px-6 py-2 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
