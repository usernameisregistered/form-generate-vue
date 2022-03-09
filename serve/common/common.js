const resCode = require("./errorCode.json")

exports.getCode = function(code, data){
    const res = resCode.filter(el => el.code === code)[0];
    return Object.assign({}, res, {data})
}