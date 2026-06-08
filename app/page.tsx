import { Suspense } from "react";
import TrackingSection from "@/components/TrackingSection";
import TrackingSkeleton from "@/components/TrackingSkeleton";
import Publiclogs from "@/logs/Publiclogs";

export default async function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Track agricultural produce with clarity
        </h1>
        <p className=" max-w-xl">
          A simple way to monitor produce from farm to delivery in real-time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">The Problem</h2>
        <p className=" max-w-xl">
          Agricultural produce often moves through multiple stages without clear
          visibility. Delays, miscommunication, and lack of tracking lead to
          losses.
        </p>
      </section>
      <Suspense fallback={<TrackingSkeleton />}>
        <TrackingSection />
      </Suspense>

      <Publiclogs />
    </main>
  );
}
