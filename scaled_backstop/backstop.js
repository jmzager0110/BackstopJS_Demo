//const scenarios = require("/scenarios/");
//fetch ("/scenarios/*").then(function(response){
    //response.json().then(function(json) {
        //let scenarios = json;
        //})
    //})

//var fs = require ('fs');
//var allScenarios = [];

//function loadScenarios (dirname, onError) {
    //var files = fs.readdirSync(dirname);
    //console.log(dirname);
    //files.forEach (function (file) {
        //content = fs.readFileSync(dirname + file, 'utf-8');
        //allScenarios.push(JSON.parse(content));
        //console.log("content");
    //})
//})

//loadScenarios ('scenarios/',
    //function (err) {
    //throw err
    //}
//)

//import data from './scenarios' assert {type: 'JSON'};

//let fetch = import('node-fetch');
//let response = fetch('./scenarios');
//let data = response.json();

let allScenarios = fetch("./scenarios")
    .then(function (response){
    return response.json();
    })
    .then(function (data) {
    for (let i=0; i<data.length; i++) {
    console.log(data[i]);
    }
    })

module.exports = {
    "id": "Scaled_Backstop",
    "viewports": [
        {
        "label": "desktop",
        "width": 1600,
        "height": 1024
        }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": allScenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
      },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
        "args": ["--no-sandbox"]
      },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
}