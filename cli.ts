#!/usr/bin/env node
"use strict"
const inquirer = require('inquirer');
const confirm = require('inquirer-confirm');
const colors = require('colors');
const args = process.argv.slice(2);
if (args == "create") {
confirm({
  question: 'Would you like to initialize a klausen.js project in this directory?',
  default: true
}).then(
    function success() {
        console.log("Initializing a project in this directory.".green);
        initializeProject();
},
    function cancel() {
    console.log("Initialization cancelled.".red);
});
function initializeProject() {
    // TBD
}
};