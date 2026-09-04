'use strict';

const fs = require('fs');

const manifestPath = `${process.cwd()}/package.json`;
const indexPath = `${process.cwd()}/index.js`;
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

delete manifest.workspaces;
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
fs.writeFileSync(
  indexPath,
  "'use strict';\nmodule.exports = 'CODEX_DATAFORM_INVALID_WORKSPACES_NODE_OPTIONS_V1';\n"
);

process.exit(0);
