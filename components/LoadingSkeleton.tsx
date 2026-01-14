export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="aspect-square w-full animate-pulse bg-gray-200 dark:bg-gray-700" />
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-2 h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-auto flex items-center justify-between">
              <div className="h-6 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
