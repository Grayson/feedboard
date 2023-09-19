#!/usr/bin/env bash

BIN_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd)"
cd "$(dirname "${BIN_DIR}")"

cd ui
npm ci
npm run build-prod --if-present
npm test
