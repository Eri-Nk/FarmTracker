"use client";

import clsx from "clsx";
import { Stage } from "@/types";
import { useState } from "react";

type TrackingDemoProps = {
  stages: Stage[];
  companyName: string;
};

const TrackingDemo = ({ stages }: TrackingDemoProps) => {
  const [currentStages, setCurrentStages] = useState(stages);
  const [logs, setLogs] = useState<string[]>([]);

  const moveForward = () => {
    let logMessage = "";

    const getTime = () =>
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

    const updated = currentStages.map((stage, index) => {
      if (stage.status === "current") {
        logMessage = `${stage.name} completed at ${getTime()}`;
        return {
          ...stage,
          status: "completed" as const,
          time: stage.time || getTime(),
        };
      }

      if (
        stage.status === "pending" &&
        currentStages[index - 1]?.status === "completed"
      ) {
        logMessage += ` | ${stage.name} started at ${getTime()}`;
        return { ...stage, status: "current" as const, time: getTime() };
      }

      return stage;
    });
    setCurrentStages(updated);

    if (logMessage) {
      setLogs((prev) => [...prev, logMessage]);
    }
  };
  const allCompleted = currentStages.every(
    (stage) => stage.status === "completed",
  );
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Tracking Demo</h2>
      <ul className="space-y-2">
        {currentStages.map((stage, index) => (
          <li
            key={index}
            className={clsx("p-2 rounded border", {
              "text-green-700 bg-green-100": stage.status === "completed",
              "text-blue-700 bg-blue-100": stage.status === "current",
              "text-gray-500 bg-gray-100": stage.status === "pending",
            })}
          >
            <div className="flex justify-between items-center">
              <span>{stage.name}</span>
              {stage.time && (
                <span className="text-xs text-gray-500">{stage.time}</span>
              )}
              <span className="text-sm capitalize">{stage.status}</span>
              {stage.location && (
                <span className="text-xs text-gray-500">{stage.location}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={moveForward}
        disabled={allCompleted}
        className={clsx(
          "mt-4 px-4 py-2 rounded transition",
          allCompleted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:opacity-90 cursor-pointer",
        )}
      >
        {allCompleted ? "All stages completed" : "Move forward"}
      </button>
      <button
        onClick={() => setCurrentStages(stages)}
        className="mt-2 px-4 py-2 border rounded cursor-pointer text-gray-600 hover:bg-gray-100 transition"
      >
        Reset
      </button>

      {/* logs */}
      <section className="mt-6">
        <h3 className="font-semibold">Update Log</h3>
        <ul className="text-sm text-gray-600">
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default TrackingDemo;
