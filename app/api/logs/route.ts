import { logs } from "@/lib/logsData";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("In route.ts", logs);

  return Response.json(logs);
}
