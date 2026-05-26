export let logs: string[] = [
  "Shipment arrived at warehouse",
  "Quality inspection completed",
  "Goods soon to be delivered",
];

export function addLogEntry(message: string) {
  logs.unshift(message);

  console.log("from server actions", logs);
}

export function deleteLog(index: number) {
  logs.splice(index, 1);
}
