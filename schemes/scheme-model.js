// const express = require("express");
const db = require("../data/config");

function find() {
	return db("schemes");
}

function findById(ID) {
	return db("schemes").where("schemes.id", ID).first();
}

function findSteps(ID) {
	return db("steps")
		.where("steps.scheme_id", ID)
		.innerJoin("schemes", "schemes.id", "steps.scheme_id")
		.select("steps.step_number", "steps.instructions", "schemes.scheme_name")
		.orderBy("steps.step_number");
}

function add(scheme) {
	return db("schemes")
		.insert(scheme)
		.then((id) => {
			return findById(id[0]);
		});
}

function update(scheme, ID) {
	return db("schemes").where({ id: ID }).update(scheme);
}

function remove(ID) {
	return db("schemes").where({ id: ID }).del();
}

module.exports = {
	find,
	findById,
	findSteps,
	remove,
	add,
	update,
};
