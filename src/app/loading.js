export default function Loading() {
  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-4">
      <div className="w-6 h-6 border-2 border-muted-foreground border-t-foreground rounded-full animate-spin"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
