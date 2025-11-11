// #!/usr/bin/env node -trace-deprecation

import { strict } from "node:assert";
import { spawn } from "node:child_process";
import { copyFileSync, read } from "node:fs";
import { copyFile } from "node:fs/promises";
import path from "node:path";

/**
 * @param {string} cmd
 */
async function runCommand(cmd) {
  return new Promise((res, reject) => {
    const runSpawn = spawn(cmd, {
      shell: true,
      env: {
        FORCE_COLOR: 1,
        ...process.env,
      },
    });

    runSpawn.on("exit", (code) => {
      if (code > 0) {
        reject(code);
      } else {
        res(code);
      }
    });

    runSpawn.stdout.on("data", (data) => {
      process.stdout.write(data);
    });

    runSpawn.stderr.on("data", (data) => {
      process.stderr.write(data);
    });
  });
}

const cwd = process.cwd();

await runCommand("bunx rslib");

// prettier-ignore
console.log(
  ` 
##### Copying Essential files #####
`,
);

const readme = path.resolve(cwd, "./README.md");

copyFile(
  path.resolve(cwd, "./README.md"),
  path.resolve(cwd, "./publish/README.md"),
).then(() => console.log("copied - ", readme));
