/**
 * Module dependencies
 */

var path = require('path');
var child_process = require('child_process');
var exec = child_process.exec;
var fs = require('fs-extra');
var _ = require('lodash');
var SocketIOClient = require('socket.io-client');
delete require.cache[require.resolve('socket.io-client')];
var SailsIOClient = require('sails.io.js');
var Sails = require('sails');





// Build a Sails socket client instance.
//
// (Of course, this runs as soon as this file is first required.
//  But it's OK because we don't actually connect except in the
//  functions below.)
var io = SailsIOClient(SocketIOClient);
io.sails.environment = 'production';
io.sails.autoConnect = false;



// Make existsSync not crash on older versions of Node
fs.existsSync = fs.existsSync || path.existsSync;
// ^ probably not necessary anymore, this is only relevant for pre-Node-0.8
// (or maybe it was Node 0.8, can't remember). Anyways, it was back when
// `existsSync()` lived in the `path` lib.






module.exports = {



  /**
   * Spin up a child process and use the `sails` CLI to create a namespaced
   * test app. If no appName is given use: 'testApp'.
   *
   * It copies all the files in the fixtures folder into their
   * respective place in the test app so you don't need to worry
   * about setting up the fixtures.
   */

  build: function(appName, done) {

    // `appName` is optional.
    if (_.isFunction(appName)) {
      done = appName;
      appName = 'testApp';
    }

    // But `done` callback is required.
    if (!_.isFunction(done)) {
      throw new Error('When using the appHelper\'s `build()` method, a callback argument is required');
    }
