export function matchesDomains(domains: string[], targets: string[]): boolean {
  const targetSet = new Set(targets);
  return domains.some((d) => targetSet.has(d));
}
