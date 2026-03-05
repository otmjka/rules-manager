import { classifyRule } from "./classifyRule";
import { RuleType } from "./ruleType";
import { matchesDomains } from "./matchesDomains";
import { parseScriptlet, type ParsedScriptlet } from "./parseScriptlet";

export const processRule = ({
  line,
  includeRuleType,
  targetDomains,
}: {
  line: string;
  includeRuleType: Array<RuleType>;
  targetDomains: string[];
}): ParsedScriptlet | null => {
  const type = classifyRule(line);
  if (includeRuleType.length && includeRuleType.indexOf(type) === -1) {
    return null;
  }

  const parsed = parseScriptlet(line);
  if (!parsed) return null;

  if (!matchesDomains(parsed.domains, targetDomains)) {
    return null;
  }

  return parsed;
};
