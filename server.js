var express = require("express");
var  app = express();
var  i18n = require("i18n");

i18n.configure({
    locales: ['en', 'nl'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    updateFiles: false,
    objectNotation: true
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(i18n.init);

// routing
app.get("/", function(req, res){
  res.send("ip required");
});

// support language
app.get("/sss", function(req, res){
  const language = req.params.language,
        slog = req.params.slog,
        ip = req.params.ip;

        function syntaxHighlight(json) {
            // for each key create a div
            // if the child is object, re invoke the main function
            return JSON.stringify(json, undefined, 2);
        }

var x = '{"region_code": "QC", "tags": ["database"], "ip": 3232720926, "area_code": null, "latitude": 45.45939999999999, "hostnames": ["linknowmail.com"], "postal_code": "H3E", "dma_code": null, "country_code": "CA", "org": "iWeb Technologies", "data": [], "asn": "AS32613", "city": null, "isp": "iWeb Technologies", "longitude": -73.5501, "last_update": "2017-02-09T07:28:23.130796", "country_code3": "CAN", "vulns": ["!CVE-2014-0160"], "country_name": "Canada", "ip_str": "192.175.104.30", "os": null, "ports": [80, 443, 2083, 110, 2087, 2086, 995, 143, 22, 587, 53, 3306, 465, 26]}';
  res.render('index', {  data : syntaxHighlight(x) });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("server at", this.address().port, app.settings.env);
});
