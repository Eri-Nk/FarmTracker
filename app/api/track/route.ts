import { Stage } from "@/types";

//this file was used in learning endpoints
import { stages } from "@/lib/stagesData";

export async function GET() {
  return Response.json(stages);
}
