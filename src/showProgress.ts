import type { DownloadProgress } from "./types";

export function showProgress(progress: DownloadProgress): void {
  const { receivedBytes, totalBytes } = progress;

  if (totalBytes > 0) {
    const percent = Math.round((receivedBytes / totalBytes) * 100);
    process.stdout.write(`\r    Progress: ${percent}% (${receivedBytes}/${totalBytes} bytes)`);
  } else {
    process.stdout.write(`\r    Downloaded: ${receivedBytes} bytes`);
  }
}
