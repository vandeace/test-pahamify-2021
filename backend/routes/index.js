const express = require("express");
const router = express.Router();
const { index: manga } = require("../controllers/manga");
const { login, register } = require("../controllers/auth");
const { show } = require("../controllers/collection");
const { json, urlencoded } = require("express");
const Kitsu = require("kitsu");
const api = new Kitsu();

//========MIDDLEWARE=======================
const { protected } = require("../middleware/auth");

//========get manga from api=======================
router.get("/manga", manga);

//========USER MANGA=======================
router.get("/collections", protected, show);

//========HOUSE ACTION=======================
router.post("/login", login);
router.post("/register", register);

module.exports = router;
