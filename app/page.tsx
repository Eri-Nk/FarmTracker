import TrackingDemo from "@/components/TrackingDemo";
import { Stage } from "@/types";

const company = {
  name: "AgroCorp Logistics",
};

const stages: Stage[] = [
  {
    name: "Harvested",
    status: "completed",
    time: "08:00 AM",
    location: "Farm",
  },
  {
    name: "In Transit",
    status: "current",
    time: "10:00 AM",
    location: "Lagos → Abuja",
  },
  { name: "Delivered", status: "pending" },
];
const Home = () => {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Track agricultural produce with clarity
        </h1>
        <p className="text-gray-600 max-w-xl">
          A simple way to monitor produce from farm to delivery in real-time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">The Problem</h2>
        <p className="text-gray-600 max-w-xl">
          Agricultural produce often moves through multiple stages without clear
          visibility. Delays, miscommunication, and lack of tracking lead to
          losses.
        </p>
      </section>
      <TrackingDemo stages={stages} companyName={company.name} />
    </main>
  );
};

export default Home;
