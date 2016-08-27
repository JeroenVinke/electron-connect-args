'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var client = require('electron-connect').client;

const argv = require('yargs').argv;
var environment = argv.env;

console.log('this returns "development" with v0.4.5 and returns undefined with v0.4.7:')
console.log('environment: ' + environment);

app.on('window-all-closed', function () {
  app.quit();
});

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 400,
    height: 300
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
