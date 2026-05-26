import TrackingDemo from "./TrackingDemo";
import { getStages } from "@/lib/getStages";

export default async function TrackingSection() {
  const stages = await getStages();

  const company = {
    name: "AgroFlow Europe",
  };

  if (stages.length === 0) {
    return (
      <div className="border border-dashed rounded-2xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">
          No tracking data available
        </h2>

        <p className="text-gray-500">
          Shipment stages will appear here once tracking begins.
        </p>
      </div>
    );
  }
  return <TrackingDemo stages={stages} companyName={company.name} />;
}
