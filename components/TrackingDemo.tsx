"use client";

import clsx from "clsx";
import { Stage } from "@/types";
import { useState, useEffect } from "react";

type TrackingDemoProps = {
  stages: Stage[];
  companyName: string;
};

const TrackingDemo = ({ stages, companyName }: TrackingDemoProps) => {
  const [currentStages, setCurrentStages] = useState(stages);
  const [stagesLogs, setStagesLogs] = useState<string[]>([]);
  const [history, setHistory] = useState<Stage[][]>([]);

  useEffect(() => {
    setCurrentStages(stages);
  }, [stages]);

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
        logMessage += ` ${stage.name} started at ${getTime()}`;
        return { ...stage, status: "current" as const, time: getTime() };
      }

      return stage;
    });

    //in history logic, the below order is necessary. Store the current state in history then update
    //the current state...check undo function for more explanation
    setHistory((prev) => [...prev, currentStages]);
    setCurrentStages(updated);

    if (logMessage) {
      setStagesLogs((prev) => [...prev, logMessage]);
    }
  };

  // are all stages completed?
  const allCompleted = currentStages.every(
    (stage) => stage.status === "completed",
  );

  //undo function to understand history $ time travel
  const undoMove = () => {
    const previousState = history[history.length - 1];
    if (!previousState) return;

    //now set the current state to the last state in history snapshot
    // and remove it from history snapshot
    setCurrentStages(previousState);
    setHistory((prev) => prev.slice(0, -1));

    setStagesLogs((prev) => prev.slice(0, -1));
    //for good UI
  };

  // reset fnc
  const resetTracking = () => {
    setCurrentStages(stages);
    setStagesLogs([]);
    setHistory([]);
  };
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        Tracking Demo for {companyName}
      </h2>
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
            <div className="flex justify-between ">
              <span>{stage.name}</span>
              <span className="text-sm capitalize">{stage.status}</span>
            </div>

            <div className="mt-1 flex gap-4 text-xs text-gray-500">
              {stage.time && <span>{stage.time}</span>}

              {stage.location && <span>{stage.location}</span>}
            </div>
          </li>
        ))}
      </ul>
      {/* btns */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={moveForward}
          disabled={allCompleted}
          className={clsx("px-4 py-2 rounded bg-green-600 text-white")}
        >
          {allCompleted ? "All stages completed" : "Move Forward"}
        </button>
        <button
          onClick={undoMove}
          disabled={history.length === 0}
          className="px-4 py-2 border rounded text-sm"
        >
          Undo
        </button>
        <button
          onClick={() => resetTracking()}
          className=" px-4 py-2 border rounded text-sm  hover:opacity-100"
          disabled={history.length === 0}
        >
          Reset
        </button>
      </div>
      {/* updated stages */}
      {stagesLogs.length > 0 && (
        <section className="mt-6 border rounded-xl p-4">
          <h3 className="font-semibold mb-2">Shipment Progress History</h3>
          <ul className="text-sm">
            {stagesLogs.map((log, i) => (
              <li key={i}>{log}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default TrackingDemo;
