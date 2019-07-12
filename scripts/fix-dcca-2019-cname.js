var fs = require('fs');
var obj = JSON.parse(fs.readFileSync("../converted-geojson/DCCA_2019.geojson", 'utf8'));

var nameDict = JSON.parse(fs.readFileSync("DCCA_2019_NAMES.json", 'utf8'));

var features = obj["features"];

features.forEach(element => {
    var cacode = element.properties["CACODE"];
    element.properties["CNAME"] = nameDict[cacode][1];
});

console.log(JSON.stringify(obj));
