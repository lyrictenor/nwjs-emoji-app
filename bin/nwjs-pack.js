#!/usr/bin/env node
import { echo, exec, exit } from 'shelljs';
echo(process.cwd());

// build application
if (exec('npm run build:dist').code !== 0) {
  echo('Error: build:dist error.');
  exit(1);
}

// clean output path
if (exec('node node_modules/rimraf/bin.js ./output').code !== 0) {
  echo('Error: clean:output error.');
  exit(1);
}
