import { logs } from "@/lib/logsData";

export async function GET() {
  return Response.json(logs);
}
