import "@testing-library/jest-dom";
import { TextEncoder } from "util";


if (typeof globalThis.TextDecoder === "undefined") {
  
  globalThis.TextEncoder = TextEncoder;
}

