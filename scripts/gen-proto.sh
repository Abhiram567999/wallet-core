#!/bin/sh
# Regenerates src/proto/tw.js|d.ts from proto/*.proto (Trust Wallet Core 4.8.4).
set -e
cd "$(dirname "$0")/.."
npx pbjs -t static-module -w es6 --no-verify --no-convert --no-delimited --force-number -o src/proto/tw.js proto/*.proto
# protobufjs is CommonJS: use a default import with the file extension (Node ESM + Metro).
sed -i.bak "s|import \* as \$protobuf from \"protobufjs/minimal\"|import \$protobuf from \"protobufjs/minimal.js\"|" src/proto/tw.js && rm src/proto/tw.js.bak
npx pbts -o src/proto/tw.d.ts src/proto/tw.js
