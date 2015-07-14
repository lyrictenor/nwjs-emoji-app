#!/usr/bin/env node

import { echo, exec, exit, pwd, ls } from 'shelljs';
import fs from 'fs';
import archiver from 'archiver';
import pkg from '../package.json';

const nwjsVersion = '0.12.2';
const platforms = [ 'win32', 'win64', 'osx32', 'osx64', 'linux32', 'linux64' ];

echo(pwd());

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

const pack = (name, platform) => {
  return new Promise((resolve, reject) => {
    let outputPath = `./output/${name}-${platform}.zip`;
    let output = fs.createWriteStream(outputPath);
    let archive = archiver('zip');

    output.on('close', () => {
      echo(`Packed: ${outputPath}`);
      echo(`${archive.pointer()} total bytes`);
      resolve(outputPath);
    });

    archive.on('error', (err) => {
      echo(`Error: pack ${outputPath}`);
      reject(new Error(err));
    });

    archive.pipe(output);
    archive.bulk([
      {
        src: ['**/*'],
        cwd: `./output/${name}/${platform}`,
        dest: `${name}-${platform}`,
        expand: true
      }
    ]);
    archive.finalize();
  });
};

Promise.all(
  platforms.map((platform) => {
    return pack(pkg.name, platform);
  })
).then(() => {
  echo('');
  echo('Packed list');
  echo(ls('-A', './output/*.zip'));
  echo('nwjs:pack complete!');
}).catch((error) => {
  echo('pack error');
  echo(error);
  exit(1);
});
