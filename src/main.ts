import filters from "../rulesets.json" with { type: "json" };
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { Filter, DownloadProgress } from "./types";
import { downloadFile } from "./downloadFile";
import { getFilenameFromUrl } from "./getFilenameFromUrl";
import { showProgress } from "./showProgress";

const OUTPUT_DIR = "./filters";

async function downloadAndSave(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const emitter = downloadFile(url);

    emitter.on("progress", (progress: DownloadProgress) => {
      showProgress(progress);
    });

    emitter.on("done", async (content: string) => {
      process.stdout.write("\n");
      await writeFile(filepath, content);
      resolve();
    });

    emitter.on("error", (error: Error) => {
      reject(error);
    });
  });
}

async function main(): Promise<void> {
  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const filter of filters as Filter[]) {
    const filterDir = join(OUTPUT_DIR, filter.id);
    await mkdir(filterDir, { recursive: true });

    console.log(`\nProcessing: ${filter.name} (${filter.id})`);

    for (const url of filter.urls) {
      const filename = getFilenameFromUrl(url);
      const filepath = join(filterDir, filename);

      try {
        console.log(`  Downloading: ${url}`);
        await downloadAndSave(url, filepath);
        console.log(`  Saved: ${filepath}`);
      } catch (error) {
        console.error(`  Error: ${(error as Error).message}`);
      }
    }
  }

  console.log("\nDone!");
}

main();
