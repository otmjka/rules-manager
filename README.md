```bash
npm i
```

1. Download rulesets JSON from uBlock Origin

```bash
npm run download-rulesets
```

Result: `rulesets.json` in the project root.

2. Download ruleset files

```bash
npm run download
```

Result: `filters` folder with downloaded `.txt` rule sets.

3. Parse rules

```bash
cat filters/ublock-filters/*.txt | grep youtube > proba.txt
npm run parse
```
