#!/usr/bin/env node
import { echo, exec, exit } from 'shelljs';
echo(process.cwd());

// build application
if (exec('npm run build:dist').code !== 0) {
  echo('Error: build:dist error.');
  exit(1);
}

// clean output path
if (exec('npm run clean:output').code !== 0) {
  echo('Error: clean:output error.');
  exit(1);
}
