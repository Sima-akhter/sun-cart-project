const SkeletonCard = () => {
  return (
    <div className="flex flex-col w-full animate-pulse">
      <div className="aspect-[4/5] w-full bg-muted rounded-sm mb-4"></div>
      <div className="flex justify-between items-start gap-2 mb-1">
        <div className="h-4 w-2/3 bg-muted rounded-sm"></div>
        <div className="h-4 w-1/4 bg-muted rounded-sm"></div>
      </div>
      <div className="h-3 w-1/3 bg-muted rounded-sm"></div>
    </div>
  );
};

export default SkeletonCard;
