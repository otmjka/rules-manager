import { RuleType } from "./ruleType";

export function classifyRule(line: string): RuleType {
  if (line === "") return RuleType.Empty;
  if (line.startsWith("!") || line.startsWith("[")) return RuleType.Comment;

  // Extended filters (cosmetic / scriptlet / procedural)
  // Check for ## #@# #+js #?# patterns — need to find the separator
  // Separator can be preceded by domain list: domain.com##selector
  const extMatch = line.match(/^[^#]*?(#@?\??#)/);
  if (extMatch) {
    const sep = extMatch[1];

    if (sep === "#@#") return RuleType.CosmeticException;

    if (sep === "#?#") return RuleType.ProceduralAbp;

    // ## or #@# — check what follows
    const sepIndex = extMatch.index! + extMatch[0].length;
    const rest = line.slice(sepIndex);

    if (rest.startsWith("+js(")) return RuleType.Scriptlet;

    const hasProceduralOp =
      rest.includes(":has(") ||
      rest.includes(":has-text(") ||
      rest.includes(":upward(") ||
      rest.includes(":remove(") ||
      rest.includes(":matches-css(") ||
      rest.includes(":matches-path(");
    if (hasProceduralOp) return RuleType.ProceduralCosmetic;

    return RuleType.CosmeticHide;
  }

  // Network exception
  if (line.startsWith("@@")) return RuleType.NetworkException;

  // Network with special options
  const dollarIndex = line.lastIndexOf("$");
  if (dollarIndex !== -1) {
    const options = line.slice(dollarIndex + 1);
    if (options.includes("redirect")) return RuleType.Redirect;
    if (options.includes("removeparam")) return RuleType.RemoveParam;
    if (options.includes("csp=")) return RuleType.Csp;
  }

  return RuleType.NetworkBlock;
}
