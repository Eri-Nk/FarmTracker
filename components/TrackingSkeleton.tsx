export default function TrackingSkeleton() {
  return (
    <section className="space-y-4 animate-pulse">
      <div className="h-6 w-48 bg-gray-200 rounded" />

      <div className="space-y-3">
        <div className="h-16 bg-gray-200 rounded-xl" />

        <div className="h-16 bg-gray-200 rounded-xl" />

        <div className="h-16 bg-gray-200 rounded-xl" />
      </div>
    </section>
  );
}
