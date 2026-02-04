import { EventEmitter } from "node:events";
import type { DownloadProgress } from "./types";

export function downloadFile(url: string): EventEmitter {
  const emitter = new EventEmitter();

  (async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      }

      const contentLength = response.headers.get("content-length");
      const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error("No response body");
      }

      const chunks: Uint8Array[] = [];
      let receivedBytes = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        receivedBytes += value.length;

        const progress: DownloadProgress = { receivedBytes, totalBytes };
        emitter.emit("progress", progress);
      }

      const allChunks = new Uint8Array(receivedBytes);
      let position = 0;
      for (const chunk of chunks) {
        allChunks.set(chunk, position);
        position += chunk.length;
      }

      const content = new TextDecoder().decode(allChunks);
      emitter.emit("done", content);
    } catch (error) {
      emitter.emit("error", error);
    }
  })();

  return emitter;
}
