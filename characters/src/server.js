const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());

server.use(require("./routes"));

server.use("*", (req, res) => {
    res.status(404).json({ message: `Not found` });
});

server.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message
    });
});
module.exports = server;