#!/usr/bin/env node
import concat from 'concat-stream';
process.stdin.pipe(concat((body) => {
  console.log(body.toString('utf8'));
}));
