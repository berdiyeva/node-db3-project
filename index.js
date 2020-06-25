const express = require("express");
const server = require("./server.js");
const welcomeRouter = require("./welcome/welcome");

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.use(welcomeRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: "Something went wrong",
	});
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
