import { Trash2 } from "lucide-react";
type LogListProps = {
  logs: string[];
  onDelete?: (index: number) => void;
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
          className="border rounded-lg p-3 flex items-center justify-between"
        >
          <span>{log}</span>
          {onDelete && (
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 hover:text-red-700 transition "
              aria-label="Delete log"
            >
              <Trash2 size={16} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
