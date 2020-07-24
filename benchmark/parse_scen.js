
var fs = require('fs');

function parse(filename) {
  var content = fs.readFileSync(filename).toString();
  var lines = content.split('\n');
  var version = lines[1].split(/\s+/);
  return {
    version: version,
    scenarios: lines.slice(1, lines.length - 1).map(parseLine)
  };
}

function parseLine(line) {
  var fields = line.split(/\s+/);
  return {
    bucket: parseInt(fields[0]),
    map: fields[1],
    width: parseInt(fields[2]),
    height: parseInt(fields[3]),
    startX: parseInt(fields[4]),
    startY: parseInt(fields[5]),
    endX: parseInt(fields[6]),
    endY: parseInt(fields[7]),
    stopX: parseInt(fields[9]),
    stopY: parseInt(fields[10]),
    length: parseFloat(fields[8])
  };
}

exports.parse = parse;
