var browserSync = require("browser-sync").create();

/**
 * This example will serve files from the './src' directory
 * and will automatically watch for html/css/js changes
 */
browserSync.init({
    watch: true,
    server: "./src",
    injectChanges: false,
    port: 2000,
    ui:{
        port: 2001,
    },
});