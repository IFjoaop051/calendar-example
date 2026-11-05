export function isna(arg: unknown): boolean {
  if(typeof arg === "string")
    return !arg.trim();

  return !arg;
}
