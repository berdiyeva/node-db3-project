const express = require("express");
const welcomeRouter = require("./welcome/welcome");
const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());
server.use("/api/schemes", SchemeRouter);
server.use("/", welcomeRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: "Something went wrong",
	});
});

module.exports = server;
