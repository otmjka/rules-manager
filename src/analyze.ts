import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import { processRule } from "./helpers/processRule";
import { RuleType } from "./helpers/ruleType";
const result = [];
const targetDomains = [
  "m.youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "youtubekids.com",
];

const dirArg = process.argv[2];
if (!dirArg) {
  console.error("Usage: npx tsx src/analyze.ts <filters-dir>");
  process.exit(1);
}

const dir = resolve(dirArg);
const files = await readdir(dir);

console.log(`Directory: ${dir}`);
console.log(`Files (${files.length}):`);
for (const file of files) {
  console.log(`  ${file}, ${join(dir, file)}`);
  // if (file !== `ubol-filters.txt`) {
  //   console.log("!!! ###");
  //   continue;
  // }

  const rl = createInterface({
    input: createReadStream(join(dir, file)),
  });

  for await (const line of rl) {
    const resultLine = processRule({
      line,
      includeRuleType: [RuleType.Scriptlet],
      targetDomains,
    });
    if (resultLine) {
      result.push({
        ...resultLine,
        filename: file,
      });
    }
  }
}
result.forEach((item, i) => {
  console.log(i, "🐙");
  console.log(item);
});

// const rl = createInterface({
//     input: createReadStream("file.txt"),
//   });
