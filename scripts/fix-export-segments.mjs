/**
 * Post-build fix for Next.js 16.4 static export (`output: "export"`).
 *
 * The exporter writes nested route segment data as directories, e.g.
 *   out/about/__next.about/__PAGE__.txt
 * but the client router requests a flat filename (slashes → dots), e.g.
 *   out/about/__next.about.__PAGE__.txt
 * (see convertSegmentPathToStaticExportFilename in next/dist/shared).
 * Without this, client-side navigation 404s on static hosts like GitHub Pages.
 *
 * This script adds a flat-named copy next to every nested segment file.
 * It is idempotent and safe to remove once Next.js fixes the mismatch.
 */
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = join(process.cwd(), "out");
if (!existsSync(OUT)) {
  console.log("fix-export-segments: no out/ directory, skipping.");
  process.exit(0);
}

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

let created = 0;
// Every directory whose name starts with "__next." is a nested segment dir.
function scan(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const file of walk(full)) {
        // __next.about/__PAGE__.txt → __next.about.__PAGE__.txt
        const flat = `${name}.${relative(full, file).split(sep).join(".")}`;
        const target = join(dir, flat);
        if (!existsSync(target)) {
          copyFileSync(file, target);
          created++;
        }
      }
    } else if (name !== "_next") {
      scan(full);
    }
  }
}

scan(OUT);
console.log(`fix-export-segments: added ${created} flat segment file(s).`);
