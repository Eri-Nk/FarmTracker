import { Stage } from "@/types";

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

export async function GET() {
  return Response.json(stages);
}
