const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="h-56 animate-pulse rounded-lg bg-gray-800/60" />
      ))}
    </div>
  );
};

export default SkeletonLoader;
