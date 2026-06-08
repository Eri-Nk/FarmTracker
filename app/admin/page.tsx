import React from "react";
import LogsContainer from "@/logs/LogsContainer";
import SummaryCard from "./SummaryCard";
import { logs } from "@/lib/logsData";
import { getStages } from "@/lib/getStages";

export default async function AdminPage() {
  const stages = await getStages();

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-sm">Manage shipment updates and logs.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Logs" value={logs.length} />

        <SummaryCard title="Tracking Stages" value={stages.length} />

        <SummaryCard
          title="Current Stage"
          value={
            stages.find((stage) => stage.status === "current")?.name ||
            "Completed"
          }
        />
      </section>

      <LogsContainer />
    </main>
  );
}
