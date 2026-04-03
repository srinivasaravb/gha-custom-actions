const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello From Custom JavaScript Action !');
    console.log("Hello World !");
}

run();