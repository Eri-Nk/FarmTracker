import { logs } from "@/lib/logsData";
import LogsList from "./LogsList";

export default function Publiclogs() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Delivery Updates</h2>

      <LogsList logs={logs} />
    </section>
  );
}
