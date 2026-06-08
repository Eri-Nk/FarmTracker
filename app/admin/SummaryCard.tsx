type SummaryCardProps = {
  title: string;
  value: string | number;
};
export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm  hover:shadow-md transition">
      <p className="text-sm ">{title}</p>

      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}
