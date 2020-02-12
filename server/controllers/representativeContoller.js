const axios = require("axios");
const express = require("express");
const {
	API_KEY,
	CONSUMER_KEY,
	CONSUMER_SECRET,
	ACCESS_TOKEN,
	TOKEN_SECRET
} = process.env;
var https = require("follow-redirects").https;
var fs = require("fs");
var Twit = require("twit");

var T = new Twit({
	consumer_key: CONSUMER_KEY,
	consumer_secret: CONSUMER_SECRET,
	access_token: ACCESS_TOKEN,
	access_token_secret: TOKEN_SECRET
});

module.exports = {
	getRepresentatives: async (req, res) => {
		const { address } = req.query;
		const representatives = await axios.get(
			`https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=${address}}`
		);
		req.session.address = {
			address: req.query.address
		};

		res.status(200).send(representatives.data);
	},
	getRepsPicture: async (req, res) => {
		const { handle } = req.query;
		T.get("users/show", { screen_name: `${handle}` }, function(
			err,
			data,
			response
		) {
			let profileImage = data.profile_image_url_https;
			if (profileImage) {
				let profileImageTwo = profileImage
					.split("_normal")
					.toString()
					.replace(",", "");

				res.status(200).send(profileImageTwo);
			} else {
				res.status(200).send(null);
			}
		});
	}
};
