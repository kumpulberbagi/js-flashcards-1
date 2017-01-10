"use strict"
// write your code here

var jsonfile = require('jsonfile')
var file = 'data.json'
var database = jsonfile.readFileSync(file)

console.log(database);
