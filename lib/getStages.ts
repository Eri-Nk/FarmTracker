import { Stage } from "@/types";

export async function getStages(): Promise<Stage[]> {
  const response = await fetch("http://localhost:3000/api/track", {
    cache: "no-store",
  });
  const data: Stage[] = await response.json();
  return data;
}
