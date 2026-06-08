"use server";
import { addLogEntry } from "@/lib/logsData";
import { revalidatePath } from "next/cache";
import { deleteLog } from "@/lib/logsData";

export async function addLog(formData: FormData) {
  const message = formData.get("message") as string;

  const cleanMessage = message?.trim();
  if (!cleanMessage) {
    throw new Error("Message is required");
  }

  addLogEntry(cleanMessage);
  revalidatePath("/");
}

export async function removeLog(index: number) {
  deleteLog(index);
}
