# Simple static file node server using Browsersync

This project is used for quick html/css/js testing. Simple server that can reload changes on the fly using `Browsersync`.
Environment is replacement for local LAMP type setup. One advantage is the reload function on multi-device connected to the server.

note: **This project is NOT for production usage**

### prerequisite + package:
- node 12+
- browser-sync

### usage:
1. run `npm install` to install the package
2. use either `npm start` or `npm run watch` to start

```
IMPORTANT: Make sure to use proper html files, if the browser is not auto reloading after file changes then it's probably because the html file is not an actual html file or its not formatted correctly.
```