interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="mb-4 text-6xl">⚠️</div>
      <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Something went wrong
      </h2>
      <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
        {message || 'Failed to load products. Please try again later.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
