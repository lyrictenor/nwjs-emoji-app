#!/usr/bin/env node
import { echo, exec, exit } from 'shelljs';
echo(process.cwd());

const buildApplication = 'npm run build:dist';
if (exec(buildApplication).code !== 0) {
  echo('Error: build:dist error.');
  exit(1);
}

const cleanOutPutPath = 'node node_modules/rimraf/bin.js ./output';
if (exec(cleanOutPutPath).code !== 0) {
  echo('Error: clean output error.');
  exit(1);
}

const nodeWebkitBuilder = 'node node_modules/node-webkit-builder/bin/nwbuild'+
  ' -v "0.12.2"' +
  ' -p "win32,win64,osx32,osx64,linux32,linux64"' +
  ' ./dist' +
  ' -o ./output';
if (exec(nodeWebkitBuilder).code !== 0) {
  echo('Error: nwbuild error.');
  exit(1);
}
