"use client";

import React, { startTransition, useOptimistic, useState } from "react";
import LogsList from "./LogsList";
import AddLogForm from "./AddLogForm";
import { removeLog } from "@/actions/logActions";
import { useRouter } from "next/navigation";

type LogClientProps = {
  initialLogs: string[];
};

export default function LogsClient({ initialLogs }: LogClientProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [optimisticLogs, updateOptimisticLogs] = useOptimistic(
    initialLogs,
    (
      state,
      action: { type: "add"; log: string } | { type: "delete"; index: number },
    ) => {
      switch (action.type) {
        case "add":
          return [action.log, ...state];

        case "delete":
          return state.filter((_, i) => i !== action.index);
        default:
          return state;
      }
    },
  );
  async function handleDelete(index: number) {
    startTransition(() => {
      updateOptimisticLogs({ type: "delete", index });
    });

    try {
      await removeLog(index);
      router.refresh();
    } catch {
      setError("Failed to delete log");
    }
  }
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Delivery Logs</h2>

      <AddLogForm
        updateOptimisticLogs={updateOptimisticLogs}
        setError={setError}
      />

      {error && <p className="text-red-500">{error}</p>}

      <LogsList logs={optimisticLogs} onDelete={handleDelete} />
    </section>
  );
}
