
const newman = require("newman");
require("dotenv").config();

newman.run(
  {
   
    collection: `https://api.postman.com/collections/44634400-84c5598f-a86d-4a7d-9c05-e9f742187270?access_key=${process.env.access_key}`,
    //collection: require("./collection/Dmoney Rest API.postman_collection.json"),
  
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./reports/reports.html",
        title: "Domeny API Testing",
      },
    },
  },
  function (err) {
    if (err) throw err;
    console.log("Collection run completed");
  }
);
