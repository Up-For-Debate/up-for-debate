const axios = require("axios");
// const express = require("express");
const {
	API_KEY,
	CONSUMER_KEY,
	CONSUMER_SECRET,
	ACCESS_TOKEN,
	TOKEN_SECRET
} = process.env;
// var https = require("follow-redirects").https;
// var fs = require("fs");
var Twit = require("twit");
var T = new Twit({
	consumer_key: CONSUMER_KEY,
	consumer_secret: CONSUMER_SECRET,
	access_token: ACCESS_TOKEN,
	access_token_secret: TOKEN_SECRET
});
module.exports = {
	getRepresentatives: async (req, res) => {
		const { address, session } = req.query;
		if(session){
			req.session.user = {
				address
			}
		}
		// console.log(req.session.user, 'getRepresentatives')
		// console.log(address)
		const representatives = await axios.get(
			`https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=${address === `City  State` ? req.session.user.address : address}}`
		);
		res.status(200).send(representatives.data);
	},
	getRepsPicture: async (req, res) => {
		const { handle } = req.query;
		// console.log("hello");
		T.get("users/show", { screen_name: `${handle}` }, function(
			err,
			data,
			// response
		) {
			let profileImage = data.profile_image_url_https;
			if (profileImage) {
				// console.log(profileImage);
				let profileImageTwo = profileImage
					.split("_normal")
					.toString()
					.replace(",", "");
				res.status(200).send(profileImageTwo);
			} else {
				res.status(200).send(null);
			}
		});
	},
	setAddress: (req,res) => {
		const {address }  = req.query
		// console.log('in setAddress')
		// console.log(address)
		req.session.user = {
			address
		}
		// console.log(req.session.user, 'setAddress')
		// console.log(req.session.user)
		res.status(200).send(req.session.user)
		
	},
	getAddress: (req, res) => {
		
		// console.log(req.session, 'getAddress')
		res.status(200).send(req.session.user.address)
	}
};



