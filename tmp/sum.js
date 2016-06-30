(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const get = id => {
	if(id === 0) {
		console.log('Everything goes well.');
	}else if(id===2){
		console.log('error!');
	}else{
		console.log('shenqi');
	}
}
},{}],2:[function(require,module,exports){
var Hello = require('./lib/hello.js');

const sum = (first, second=0) => {
	return first+second;
}

const dod = sb => {
	sb ++;
	return sb * GLOBAL;
}

let x = 0;
console.log(x);
},{"./lib/hello.js":1}]},{},[2]);
