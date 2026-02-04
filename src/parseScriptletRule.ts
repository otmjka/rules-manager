import { readFile } from "node:fs/promises";

interface Rule {
  raw: string;
  scriptlet: string;
  domains: string[];
}

const filePath = "./proba.txt";
const searchDomain = "youtube";

function matchDomain(domain: string, search: string): boolean {
  if (domain === search) return true;
  if (domain.startsWith(`${search}.`)) return true;
  if (domain.includes(`.${search}.`)) return true;
  return false;
}

function hasDomain(domainsPart: string, search: string): boolean {
  const domains = domainsPart.split(",");
  for (const domain of domains) {
    if (domain.startsWith("~")) continue;
    const clean = domain.replace(/>>$/, "");
    if (matchDomain(clean, search)) return true;
  }
  return false;
}

function parseRule(line: string): Rule {
  const idx = line.indexOf("##+js(");
  const domainsPart = line.slice(0, idx);
  const domains = domainsPart.split(",").map((d) => d.replace(/>>$/, ""));

  const jsStart = idx + 6;
  const jsEnd = line.lastIndexOf(")");
  const jsContent = line.slice(jsStart, jsEnd);

  const commaIdx = jsContent.indexOf(",");
  const scriptlet = commaIdx === -1 ? jsContent : jsContent.slice(0, commaIdx);

  return { raw: line, scriptlet, domains };
}

async function main() {
  const content = await readFile(filePath, "utf-8");
  const lines = content.split("\n");
  const rules: Rule[] = [];

  for (const line of lines) {
    if (line.startsWith("!")) continue;
    if (!line.includes("##+js")) continue;

    const idx = line.indexOf("##+js");
    const domainsPart = line.slice(0, idx);
    if (!hasDomain(domainsPart, searchDomain)) continue;

    console.log(line);
    rules.push(parseRule(line));
  }

  console.log("\n\n--- Summary ---\n");

  const byScriptlet = new Map<string, Rule[]>();
  for (const rule of rules) {
    const list = byScriptlet.get(rule.scriptlet) || [];
    list.push(rule);
    byScriptlet.set(rule.scriptlet, list);
  }

  for (const [scriptlet, list] of byScriptlet) {
    console.log(scriptlet);
    console.log("\n");
    for (const rule of list) {
      console.log(rule.raw);
    }
    console.log("\n");
  }
}

main();
