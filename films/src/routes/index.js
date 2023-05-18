const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("App Star Wars"));

router.use("/films", require("./filmsRouter"));

module.exports = router;