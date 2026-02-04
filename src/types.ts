export interface Filter {
  id: string;
  name: string;
  urls: string[];
  group?: string;
  enabled?: boolean;
  trusted?: boolean;
  lang?: string;
  tags?: string;
  excludedPlatforms?: string[];
  homeURL?: string;
  parent?: string;
}

export interface DownloadProgress {
  receivedBytes: number;
  totalBytes: number;
}

export interface DownloadEvents {
  progress: (data: DownloadProgress) => void;
  done: (content: string) => void;
  error: (error: Error) => void;
}
