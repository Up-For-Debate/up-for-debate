const { API_KEY } = process.env;
const axios = require("axios");

module.exports = {
	getUpcomingElections: (req, res) => {
		const { address } = req.query;
		axios
			.get(
				`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${API_KEY}&address=${address}`
			)
			.then(response => {
				res.status(200).send(response.data);
			})
			.catch(err => res.status(400).send(err));
	}
};
