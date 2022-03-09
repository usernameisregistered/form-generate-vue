const fs = require("fs");
const path = require("path");
const { serveDir, frontDir } = require("../env.js");
const fileName = path.join(serveDir, "./config.json")

exports.getContent = function () {
    return require(fileName);
}

exports.updateContent = function (content) {
    const data = require(fileName);
    const newData = Object.assign({}, data, content)
    return fs.writeFileSync(fileName, JSON.stringify(newData, null, 4))
}

exports.getThemeList = function () {
    const widgetsPath = path.join(frontDir, "./widgets");
    return fs.readdirSync(widgetsPath).map(el => el.split(".")[0]);
}

exports.moveFile = function (fileName, oldFileName) {
    const newPath = path.join(frontDir, "./widgets", fileName + ".json");
    const oldPath = path.join(frontDir, "./widgets", oldFileName);
    let res = fs.renameSync(oldPath, newPath)
    if (res) {
        return "移除文件失败"
    } else {
        return null
    }
}