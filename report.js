const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    
    collection: `https://api.postman.com/collections/44634400-7711b16d-d1e2-475a-aed5-6b9e66f917a7?access_key=${process.env.PMAT_KEY}`,
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