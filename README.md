## 0. installation

```bash
npm i
```

## 1. Download rulesets JSON from uBlock Origin

```bash
npm run download-rulesets
```

Result: `rulesets.json` in the project root.

## 2. Download ruleset files

```bash
npm run download -- ./filters-305
```

UPD: it download `enabled: true` and w/o `excludePaths: ['Safari']` rules to ./filters-305

```
├── filters-305
│   ├── badware.min.txt
│   ├── easylist.txt
│   ├── easyprivacy.txt
│   ├── filters.min.txt
│   ├── privacy.min.txt
│   ├── quick-fixes.min.txt
│   ├── ubol-filters.txt
│   └── unbreak.min.txt
```

## 2.1

we go through files in `./filters-305`
get scriplets

```bash
npm run analyze -- ./filters-305 > result-anal.md
```

````ts
/* 
DEPRECATED

Result: `filters` folder with downloaded `.txt` rule sets.
 
3. Parse rules

```bash
cat filters/ublock-filters/*.txt | grep youtube > proba.txt
npm run parse */
````

```

```
