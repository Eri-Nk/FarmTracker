"use client";
import { addLog } from "@/actions/logActions";
import SubmitButton from "./SubmitButton";
import { startTransition } from "react";

type AddLogFormProps = {
  updateOptimisticLogs: (
    action: { type: "add"; log: string } | { type: "delete"; index: number },
  ) => void;
  setError: (message: string) => void;
};

export default function AddLogForm({
  updateOptimisticLogs,
  setError,
}: AddLogFormProps) {
  return (
    <form
      action={async (formData) => {
        const message = formData.get("message") as string;

        startTransition(() => {
          updateOptimisticLogs({ type: "add", log: message });
        });

        try {
          await addLog(formData);

          setError("");
        } catch {
          setError("Failed to add Log");
        }
      }}
      className="space-y-4 border rounded-xl p-4"
    >
      <h2 className="text-lg font-semibold">Add Delivery Log</h2>

      <input
        type="text"
        name="message"
        placeholder="Enter log message"
        className="w-full border rounded-lg p-2"
      />
      <SubmitButton />
    </form>
  );
}
