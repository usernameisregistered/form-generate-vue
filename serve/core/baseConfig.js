const fs = require("fs");
const path = require("path");
const { serveDir } = require("../env.js");
const fileName = path.join(serveDir, "./config.json")

exports.getContent = function(){
    return require(fileName);
}

exports.updateContent = function(content){
    const data = require(fileName);
    const newData = Object.assign({}, data, content)
    return fs.writeFileSync(fileName, JSON.stringify(newData, null, 4))
}