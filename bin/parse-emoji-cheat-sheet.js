#!/usr/bin/env node
import concat from 'concat-stream';
process.stdin.pipe(concat((body) => {
  console.log(JSON.stringify(body.toString('utf8')));
}));
