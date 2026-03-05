export function getScriptletDomains(line: string): {
  items?: string[];
  raw?: string;
  error?: string;
} {
  try {
    const sepIndex = line.indexOf("##+js(");
    if (sepIndex < 1) throw new Error("🪭🪭🪭 👠👠👠");

    return {
      items: line.slice(0, sepIndex).split(","),
      raw: line.slice(0, sepIndex),
    };
  } catch (error) {
    return {
      error: (error as unknown as Error).message,
    };
  }
}
