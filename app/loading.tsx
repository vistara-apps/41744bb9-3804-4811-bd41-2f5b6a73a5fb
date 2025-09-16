export default function Loading() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="container py-8">
        <div className="animate-pulse space-y-8">
          {/* Header skeleton */}
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          
          {/* Hero skeleton */}
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          
          {/* Grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
