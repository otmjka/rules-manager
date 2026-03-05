export interface ParsedScriptlet {
  domains: string[];
  name: string;
  args: string[];
}

export function parseScriptlet(line: string): ParsedScriptlet | null {
  const sepIndex = line.indexOf("##+js(");
  if (sepIndex === -1) return null;

  const domains = sepIndex === 0 ? ["*"] : line.slice(0, sepIndex).split(",");

  // +js(name, arg1, arg2, ...)  — strip "+js(" and trailing ")"
  const body = line.slice(sepIndex + 6, -1);
  const [name, ...args] = body.split(", ");

  return { domains, name, args };
}
