# :innocent: Emoji App

[![Build Status][travis-image]][travis-url]

> NW.js app for choosing an emoji and copy to clipboard :tada:

![emoji-app](https://cloud.githubusercontent.com/assets/75448/8761901/4aa96530-2da3-11e5-929e-185ff0f63f61.gif)


## :cupid: Installation

[Download Latest Release](https://github.com/lyrictenor/nwjs-emoji-app/releases/latest)

OS X, Windows, Linux support. :ok_hand:


## :muscle: Features

Currently, it uses :

* [React](http://facebook.github.io/react/) with [JSX](https://facebook.github.io/jsx/);
* [Redux](https://github.com/gaearon/redux) for the _Atomic Flux_ architecture. ([Flux implementation](http://facebook.github.io/flux/));
* [Babel](https://babeljs.io/) for ES6/ES7 transpilation and linting;
* [Webpack](http://webpack.github.io/) for the tooling;
* [NW.js](http://nwjs.io/);
* [nw-builder](https://github.com/mllrsohn/nw-builder) for the packaging NW.js app;
* [Power-Assert](https://github.com/power-assert-js/power-assert);
* [Tachikoma.io](http://tachikoma.io/) for interval dependency update with [David](https://github.com/alanshaw/david);
* [Awesome Node.js CLI (cross platform)](https://github.com/lyrictenor/awesome-nodejs-cross-platform-cli);


## :hammer: Development

### On NW.js

```
npm run build:dev && YOUR_NWJS_CMD dist/
```

### On Browser (development)

```
npm start & open http://localhost:3000/
```


## :hatching_chick: License

### Emoji App

Copyright (c) 2015 sanemat. Licensed under the MIT license.

### Emoji images

See [license-emoji-images](./license-emoji-images)

### Emoji Text mapping data

See [license-emoji-mapping-data](./license-emoji-mapping-data)
[Emoji cheat sheet for GitHub, Basecamp and other services](http://www.emoji-cheat-sheet.com/)


[travis-url]: https://travis-ci.org/lyrictenor/nwjs-emoji-app
[travis-image]: https://travis-ci.org/lyrictenor/nwjs-emoji-app.svg?branch=master
