var unirest = require("unirest");

var req = unirest("GET", "https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news");
  
req.headers({
      "x-rapidapi-key": "a6a2a7f3f7mshbce1bf03bc3f7d8p1cc772jsne640a95a929f",
      "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
      "useQueryString": true
  });
    
req.end(function (res) {
     return(res.body);
  });

