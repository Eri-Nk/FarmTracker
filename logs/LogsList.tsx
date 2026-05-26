import React from "react";
type LogListProps = {
  logs: string[];
  onDelete: (index: number) => void;
};
export default function LogsList({ logs, onDelete }: LogListProps) {
  if (logs.length === 0) {
    return (
      <div className="border border-dashed rounded-2xl p-6 text-center">
        <p className="text-gray-500">No delivery logs yet.</p>
      </div>
    );
  }
  return (
    <ul className="space-y-2">
      {logs.map((log, index) => (
        <li
          key={`${log}-${index}`}
          className="border rounded-lg p-3 flex items-center justifiy-between"
        >
          <span>{log}</span>
          <button
            onClick={() => onDelete(index)}
            className="text-sm text-red-500 "
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
