"use server";
import { addLogEntry } from "@/lib/logsData";
import { revalidatePath } from "next/cache";
import { deleteLog } from "@/lib/logsData";

export async function addLog(formData: FormData) {
  const message = formData.get("message") as string;

  //await new Promise((resolve) => setTimeout(resolve, 2000));

  //throw new Error("Failed to save log");
  addLogEntry(message);
  revalidatePath("/");
}

export async function removeLog(index: number) {
  await new Promise((r) => setTimeout(r, 1000));

  deleteLog(index);
}
