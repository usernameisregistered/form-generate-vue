const e = require('express')
const express = require('express')
const router = express.Router()
const { getContent, updateContent } = require("../core/baseConfig.js")
router.get('/detail', function (req, res) {
    res.json({
        code: 0,
        message: "success",
        data: getContent()
    })
})

router.post('/update', function (req, res) {
    const msg = updateContent(req.body);
    if(msg){
        res.json({
            code: 0,
            message: "success",
            data: "配置更新失败"
        })
    } else {
        res.json({
            code: 0,
            message: "success",
            data: "配置更新成功"
        })
    }
})

router.post('/addUI', function (req, res) {
    res.json({
        code: -1,
        message: "success",
        data: "暂无实现"
    })
})

module.exports = router