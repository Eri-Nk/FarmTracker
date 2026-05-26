export type Stage = {
  name: string;
  status: "completed" | "current" | "pending";
  time?: string;
  location?: string;
};
