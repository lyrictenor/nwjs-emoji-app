#!/usr/bin/env node
import { echo, exec, exit, pwd, pushd, popd } from 'shelljs';
import pkg from '../package.json';

const nwjsVersion = '0.12.2';
const platforms = [ 'win32', 'win64', 'osx32', 'osx64', 'linux32', 'linux64' ];

pushd(pwd());

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

const nodeWebkitBuilder = 'node' +
  ' node_modules/node-webkit-builder/bin/nwbuild' +
  ` --version '${nwjsVersion}'` +
  ` --platforms '${platforms.join(',')}'` +
  ' ./dist' +
  ' --buildDir ./output';
if (exec(nodeWebkitBuilder).code !== 0) {
  echo('Error: nwbuild error.');
  exit(1);
}

for (let platform of platforms) {
  pushd(`./output/${pkg.name}/${platform}`);
  popd();
}
