const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");

const server = express();
server.use(morgan("dev"));

server.use("/characters", createProxyMiddleware({
    target:"http://characters:3002",
	changeOrigin:true
}));

server.use("/films", createProxyMiddleware({
    target:"http://films:3003",
	changeOrigin:true
}));

server.use("/planets", createProxyMiddleware({
    target:"http://planets:3004",
	changeOrigin:true
}));

server.get("/", (req, res) => {
    res.status(200).json({ message: `App Star Wars v1.0.0` });
});

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