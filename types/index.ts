export type Stage = {
  name: String;
  status: "completed" | "current" | "pending";
  time?: String;
  location?: string;
};
