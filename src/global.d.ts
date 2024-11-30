import "@testing-library/jest-dom";

// Perluas Jest Matchers untuk mendukung custom matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveAttribute(attr: string, value?: unknown): R;
      toHaveClass(...classNames: string[]): R;
    }
  }
}

declare const global: typeof globalThis;

declare module "util" {
  export class TextEncoder {
    encode(input?: string): Uint8Array;
  }

  export class TextDecoder {
    constructor(label?: string, options?: TextDecoderOptions);
    decode(
      input?: ArrayBuffer | ArrayBufferView,
      options?: { stream?: boolean }
    ): string;
  }
}


