#!/usr/bin/env node

if (!process.env.TRAVIS_TAG) {
  throw new Error('This is not Travis-CI\'s tag build.');
}
