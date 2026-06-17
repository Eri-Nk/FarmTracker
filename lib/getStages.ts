import { Stage } from "@/types";
import { stages } from "./stagesData";

export async function getStages(): Promise<Stage[]> {
  // const response = await fetch("/api/track", {
  //   cache: "no-store",
  // });
  // const data: Stage[] = await response.json();
  // return data;
  return stages;
}
