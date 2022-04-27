'use strict';
// Load dmxnet as libary
var dmxlib = require('./lib.js');
// Create new dmxnet instance
var dmxnet = new dmxlib.dmxnet({});

// Create a new receiver instance, listening for universe 5 on net 0 subnet 0
var receiver = dmxnet.newReceiver({
  subnet: 15,
  universe: 10,
  net: 0,
});

// Dump data if DMX Data is received
receiver.on('data', function (data) {
 // console.log('DMX data:', data); // eslint-disable-line no-console
});

const ws281x = require('rpi-ws281x-native');

const channel = ws281x(100, { stripType: 'ws2812' });

const colorArray = channel.array;
for (let i = 0; i < channel.count; i++) {
  colorsArray[i] = 0xffcc22;
}

ws281x.render();
