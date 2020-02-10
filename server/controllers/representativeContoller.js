const axios = require("axios");
const express = require("express");
const { API_KEY } = process.env;

module.exports = {
	getRepresentatives: async (req, res) => {
		const { address } = req.query;
		const representatives = await axios.get(
			`https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=${address}}`
		);
	}
};
