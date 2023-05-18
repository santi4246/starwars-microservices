const express = require("express");
const morgan = require("morgan");
const server = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Configurations
server.use(morgan("dev"));
server.use(cors());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use("/api", require("./routes"));

// Response
server.get("/", (req, res, next) => {
    res.status(200).json({ message: `Database microservice running` });
});

server.use("*", (req, res) => {
    res.status(404).send("Not found");
});

server.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message
    });
});

module.exports = server;