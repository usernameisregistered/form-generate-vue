const multer = require("multer")
const express = require('express')
const path = require("path");
const router = express.Router()
const { getContent, updateContent, getThemeList, moveFile } = require("../core/baseConfig.js")
const { getCode } = require("../common/common")
const { frontDir } = require("../env.js");
const upload = multer({ dest: path.join(frontDir, "./widgets") })

router.get("/UIList", (req, res) => {
    res.json(getCode(0, getThemeList()))
})
router.get('/detail', function (req, res) {
    res.json(getCode(0, getContent()))
})

router.post('/update', function (req, res) {
    const msg = updateContent(req.body);
    if (msg) {
        res.json(getCode(1, msg))
    } else {
        res.json(getCode(0, "配置更新成功"))
    }
})

router.post('/addUI', upload.single("themeFile"), function (req, res) {
    const themeList = getThemeList();
    const themeName = req.body.themeName;
    if (themeList.includes(themeName)) {
        res.json(getCode(0, "已存在的主题样式"))
    } else {
        const msg = moveFile(themeName, req.file.filename);
        if (msg) {
            res.json(getCode(1, msg))
        } else {
            res.json(getCode(0, "新增主题样式"))
        }
    }

})

module.exports = router