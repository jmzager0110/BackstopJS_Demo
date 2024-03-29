report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\BackstopSimple_Test_One_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20230430-143741\\BackstopSimple_Test_One_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "BackstopSimple_Test_One_0_document_0_desktop.png",
        "label": "Test One",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "https://www.google.com",
        "expect": 0,
        "viewportLabel": "desktop",
        "error": "Reference file not found C:\\Users\\Jessica\\Documents\\BackstopJS_Demo\\backstop_simple\\test\\backstop_data\\bitmaps_reference\\BackstopSimple_Test_One_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\BackstopSimple_Test_Two_0__0_desktop.png",
        "test": "..\\bitmaps_test\\20230430-143741\\BackstopSimple_Test_Two_0__0_desktop.png",
        "selector": "",
        "fileName": "BackstopSimple_Test_Two_0__0_desktop.png",
        "label": "Test Two",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "https://www.test.com",
        "expect": 0,
        "viewportLabel": "desktop",
        "engineErrorMsg": "net::ERR_CONNECTION_TIMED_OUT at https://www.test.com",
        "error": "Reference file not found C:\\Users\\Jessica\\Documents\\BackstopJS_Demo\\backstop_simple\\test\\backstop_data\\bitmaps_reference\\BackstopSimple_Test_Two_0__0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "Backstop Simple"
});