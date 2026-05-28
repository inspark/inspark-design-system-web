/**
 * Migrates Sass @import to @use
 * Rules:
 * - Top-level @import of CSS-generating files (ids-*, loader.*) → @use 'name'
 * - Top-level @import of everything else (partials, variables, mixins) → @use 'name' as *
 * - @import inside CSS blocks (line starts with whitespace) → unchanged
 */

const fs = require('fs');
const path = require('path');

function findScssFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist') {
      findScssFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.scss')) {
      files.push(fullPath);
    }
  }
  return files;
}

function isCssGenerating(importPath) {
  const basename = path.basename(importPath.replace(/['"]/g, ''));
  return (
    basename.startsWith('ids-') ||
    basename.startsWith('loader.') ||
    importPath.includes('/ids-') ||
    importPath.replace(/\\/g, '/').includes('/ids-')
  );
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  // Normalise line endings to LF for processing, remember original
  const hasCrlf = raw.includes('\r\n');
  const content = raw.replace(/\r\n/g, '\n');

  const lines = content.split('\n');
  let hasChanges = false;

  const newLines = lines.map(line => {
    // Only touch top-level @import (no leading whitespace before @import)
    const topLevelImport = /^@import\s+['"]/.test(line);
    if (!topLevelImport) return line;

    // Extract the import path
    const m = line.match(/^@import\s+(['"])(.*?)\1\s*;/);
    if (!m) return line;

    const [fullMatch, quote, importPath] = m;
    const useAlias = isCssGenerating(importPath) ? '' : ' as *';
    const converted = line.replace(
      /^@import\s+(['"])(.*?)\1/,
      `@use ${quote}${importPath}${quote}${useAlias}`
    );

    if (converted !== line) {
      hasChanges = true;
    }
    return converted;
  });

  if (hasChanges) {
    let output = newLines.join('\n');
    if (hasCrlf) output = output.replace(/\n/g, '\r\n');
    fs.writeFileSync(filePath, output, 'utf8');
    return true;
  }
  return false;
}

const srcDir = path.join(__dirname, 'src');
const scssFiles = findScssFiles(srcDir);

let convertedCount = 0;
for (const file of scssFiles) {
  const changed = processFile(file);
  if (changed) {
    convertedCount++;
    console.log(`  Converted: ${path.relative(__dirname, file)}`);
  }
}

console.log(`\nDone: ${convertedCount} files converted.`);
console.log('NOTE: Indented @import (inside CSS blocks) left unchanged — needs manual mixin pattern.');
