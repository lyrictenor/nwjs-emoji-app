#!/usr/bin/env node
import { echo, exec, exit } from 'shelljs';
echo(process.cwd());

// build application
if (exec('npm run build:dist').code !== 0) {
  echo('Error: build error.');
  exit(1);
}
