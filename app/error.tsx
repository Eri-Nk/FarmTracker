"use client";
type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h2 className="text-red-500 text-xl font-semibold mb-2">
        Something went wrong.
      </h2>

      <p className="text-gray-600 mb-4">{error.message}</p>

      <button onClick={reset} className="px-4 py-2 bg-black text-white rounded">
        Try Again
      </button>
    </main>
  );
}
