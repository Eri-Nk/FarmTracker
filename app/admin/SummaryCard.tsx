import React from "react";

type SummaryCardProps = {
  title: string;
  value: string | number;
};
export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="border rounded-2xl p-5 shadow-sm bg-white hover:shadow-md transition">
      <p className="text-sm text-gray-500 mb-2">{title}</p>

      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}
