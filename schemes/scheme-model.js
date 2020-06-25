const express = require("express");
const db = require("../data/config");

function find() {
	return db("schemes");
}

function findById(id) {
	return db("schemes").where({ id }).first();
}

function findSteps(id, scheme_name) {
	return db("schemes").where({ id });
}

function add(scheme) {
	db("schemes")
		.insert(scheme)
		.then((ids) => {
			return findById(ids[0]);
		});
}

function remove(id) {
	db("schemes").where({ id }).del();
}

module.exports = { find, findById, findSteps, add, remove };
