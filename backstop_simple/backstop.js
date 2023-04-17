//import fetch from "node-fetch"
//backstop test --configPath=./backstop.js
//const fetch = require("node-fetch")
//fetch ("./scenarios/").then(function(response){
    //response.json().then( function(json){
    //let scenarios = json
   // })
//})

var fs = require('fs');
var allScenarios = [];

function loadScenarios (dirname, onError) {
    var files = fs.readdirSync(dirname);
    files.forEach (function (file) {
        content = fs.readFileSync(dirname + file, 'utf-8');
        allScenarios.push(JSON.parse(content));
    })
}

loadScenarios ('scenarios/',
    function (err) {
        throw err;
    }
)

module.exports = {
    "id": "Backstop Simple",
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
        bitmaps_reference: "test/backstop_data/bitmaps_reference",
        bitmaps_test: "test/backstop_data/bitmaps_test",
        html_report: "test/backstop_data/html_report"
             },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
    "args": ["--no-sandbox"]
               },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
};