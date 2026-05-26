import React from "react";
import LogsClient from "./LogsClient";
import { logs } from "@/lib/logsData";

// async function getLogs(): Promise<string[]> {
//   const response = await fetch("http://localhost:3000/api/logs", {
//     //next: { revalidate: 0 },
//     cache: "no-store",
//   });

//   return response.json();
// }

export default function LogsContainer() {
  // const logs = await getLogs();
  return (
    <section className="space-y-4">
      <LogsClient initialLogs={logs} />
    </section>
  );
}
