import { flags } from "./commands";

export function getBooleanFlag(
  key: keyof typeof flags,
  value: boolean,
  long = false
): string {
  return value ? flags[key].flag[+long] : "";
}

export function getStringFlag(
  key: keyof typeof flags,
  value: string,
  long = false
): string {
  return value ? `${flags[key].flag[+long]} ${formatStringArg(value)}` : "";
}

export function arrayToArgString(arr: string[]): string {
  return arr.filter(Boolean).join(" ");
}

export function getArrayFlag(
  key: keyof typeof flags,
  value: string[],
  long = false
) {
  return arrayToArgString(
    value.filter(Boolean).map((val) => `${flags[key].flag[+long]} ${val}`)
  );
}

export function formatStringArg(str: string): string {
  const trimmed = str.trim();
  return trimmed.includes(" ") && !trimmed.includes('"')
    ? `"${trimmed}"`
    : trimmed;
}

export function stringifyEnvVarTuple({
  key,
  value,
}: {
  key: string;
  value: string;
  id: string;
}): string {
  return `${key}=${formatStringArg(value)}`;
}
