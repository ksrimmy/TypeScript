// @traceResolution: true
// @noImplicitReferences: true
// @currentDirectory: /
// This tests that an import can be matched by a `package.json` giving us an implicitly `any` module

// @filename: /tsconfig.json
{}

// @filename: /node_modules/foo/package.json
{}

// @filename: /a.ts
import * as foo from "foo";
foo.a;


