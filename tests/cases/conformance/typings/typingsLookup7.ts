// @traceResolution: true
// @noImplicitReferences: true
// @currentDirectory: /
// This tests that an ambient module declaration overrides an untyped import.

// @filename: /tsconfig.json
{}

// @filename: /node_modules/foo/package.json
{}

// @filename: /d.d.ts
declare module "foo" {
    export const x: number;
}

// @filename: /e.ts
/// <reference path="./d.d.ts" />
import { x } from "foo";
x;
