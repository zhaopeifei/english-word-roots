// Generic checkpoint/resume system for long-running scripts.
// Persists progress to a JSON file so scripts can resume after interruption.
import * as fs from 'fs';

interface CheckpointData<T> {
  processed: Record<string, T>;
  errors: Record<string, string>;
  lastUpdated: string;
}

export class Checkpoint<T> {
  private data: CheckpointData<T>;
  private dirty = false;
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(private filePath: string) {
    if (fs.existsSync(filePath)) {
      this.data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      console.log(
        `  Checkpoint loaded: ${Object.keys(this.data.processed).length} processed, ` +
          `${Object.keys(this.data.errors).length} errors`,
      );
    } else {
      this.data = { processed: {}, errors: {}, lastUpdated: new Date().toISOString() };
    }

    // Auto-save every 30 seconds
    this.timer = setInterval(() => this.flush(), 30_000);
  }

  get processedCount(): number {
    return Object.keys(this.data.processed).length;
  }

  get errorCount(): number {
    return Object.keys(this.data.errors).length;
  }

  get allProcessed(): Record<string, T> {
    return this.data.processed;
  }

  isProcessed(key: string): boolean {
    return key in this.data.processed || key in this.data.errors;
  }

  getResult(key: string): T | undefined {
    return this.data.processed[key];
  }

  addResult(key: string, value: T): void {
    this.data.processed[key] = value;
    this.dirty = true;
  }

  addError(key: string, message: string): void {
    this.data.errors[key] = message;
    this.dirty = true;
  }

  /** Write to disk if there are unsaved changes. */
  flush(): void {
    if (!this.dirty) return;
    this.data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    this.dirty = false;
  }

  /** Stop auto-save timer and do final flush. */
  close(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.flush();
  }
}
