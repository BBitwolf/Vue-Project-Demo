#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
xcopy /E /I dist\ docs\
