
// Type definitions for AOS (Animate On Scroll)
interface AosOptions {
  offset?: number;
  delay?: number;
  duration?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
}

interface AosStatic {
  init(options?: AosOptions): void;
  refresh(hard?: boolean): void;
  refreshHard(): void;
}

declare global {
  interface Window {
    AOS: AosStatic;
  }
}

export {};
