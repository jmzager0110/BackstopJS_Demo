//const scenarios = require("./scenarios");
//fetch ("/scenarios/*").then(function(response){
    //response.json().then(function(json) {
        //let scenarios = json;
        //})
    //})
//Error: Cannot find module './scenarios'

//import data from './scenarios' assert {type: 'JSON'};
//console.log(data);
//SyntaxError: Cannot use import statement outside a module

//let fetch = import('node-fetch');
//let response = fetch('./scenarios');
//let data = response.json();
    //console.log(response.json);
//TypeError: fetch is not a function

//const allScenarios = fetch("./scenarios")
    //.then(function (response){
    //return response.json();
    //})
    //.then(function (data) {
    //for (let i=0; i<data.length; i++) {
    //console.log(data[i]);
    //}
    //})
//error message, "ReferenceError: fetch is not defined


//fetch('./scenarios')
    //.then((response) => response.json())
    //.then((json) => console.log(json));
//error message, "ReferenceError: fetch is not defined

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
//}

//loadScenarios ('scenarios/',
    //function (err) {
    //throw err
    //}
//)
//Lines 36-53: THIS RUNS BACKSTOP, But only selects 3 scenarios, it is reading each file as a scenario
//Error thrown TypeError: Cannot read property 'replace' of undefined
//     at Object.makeSafe (C:\Users\Jessica\AppData\Roaming\npm\node_modules\backstopjs\core\util\engineTools.js:48:14)
//     at module.exports (C:\Users\Jessica\AppData\Roaming\npm\node_modules\backstopjs\core\util\runPuppet.js:28:41)
//     at C:\Users\Jessica\AppData\Roaming\npm\node_modules\backstopjs\node_modules\p-map\index.js:57:28
//     at processTicksAndRejections (internal/process/task_queues.js:95:5)

//TODO: Backstop is reading each file as a scenario, try iterating through the "scenarios" objects, multiple?
//TODO: Can several json files declare the same object?

/*async function loadScenarios(){
    const requestURL = "./scenarios";
    const request = new Request(requestURL);

    const response= await fetch(request);
    const fetchScenarios = await response.json();

    const allScenarios = JSON.parse(fetchScenarios);
    for (const scenario of scenarios){
        const allScenarios = `{"scenarios":
                            {
                              "label"
                              "url"
                              "delay"
                              "postInteractionWait"
                              "selectors"
                              "selectorExpansion"
                              "misMatchThreshold"
                              "requireSameDimensions"
                            }
                            }`
                            };

                            console.log(JSON.parse(scenarios));
}

loadScenarios();*/

/*function loadScenarios() {
    for (a = 0; a > number.of.files.length; a++) {
    let json_file = loadString('${a}.json');
    let obj = JSON.parse(json_file);
    let arrayLength = obj.length;

    for (let i = 0; i < arrayLength; i++){
        const allScenarios = `{"scenarios":
                                    {
                                      "label"
                                      "url"
                                      "delay"
                                      "postInteractionWait"
                                      "selectors"
                                      "selectorExpansion"
                                      "misMatchThreshold"
                                      "requireSameDimensions"
                                    }
                                    }`
    }
    }

}*/

/*// we need a function to load files
    // done is a "callback" function
    // so you call it once you're finished and pass whatever you want
    // in this case, we're passing the `responseText` of the XML request
       var loadFile = function (filePath, done) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () { return done(this.responseText) }
        xhr.open("GET", filePath, true);
        xhr.send();
    }
    // paths to all of your files
    var myFiles = [ "./scenarios/sample-one.json", "./scenarios/sample-two.json", "./scenarios/sample-three.json" ];
    // where you want to store the data
    var jsonData = [];
    // loop through each file
    myFiles.forEach(function (file, i) {
        // and call loadFile
        // note how a function is passed as the second parameter
        // that's the callback function
        loadFile(file, function (responseText) {
            // we set jsonData[i] to the parse data since the requests
            // will not necessarily come in order
            // so we can't use JSONdata.push(JSON.parse(responseText));
            // if the order doesn't matter, you can use push
            jsonData[i] = JSON.parse(responseText);
            var arrayLength = jsonData.length;
            // or you could choose not to store it in an array.
            // whatever you decide to do with it, it is available as
    for (var i = 0; i < arrayLength; i++) {

       const allScenarios = `{"scenarios":
                                           {
                                             "label"
                                             "url"
                                             "delay"
                                             "postInteractionWait"
                                             "selectors"
                                             "selectorExpansion"
                                             "misMatchThreshold"
                                             "requireSameDimensions"
                                           }
                                           }`
      }
            // responseText within this scope (unparsed!)
        })
    })*/

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
    "scenarios": loadScenarios(),
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