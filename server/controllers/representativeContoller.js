const axios = require("axios");
const express = require("express");
const { API_KEY } = process.env;

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
  }
  //   getRepsPicture: async (req, res) => {
  //     const { handle } = req.query;
  //     console.log(req.query);
  //     const picture = await axios.get(
  //       `https://twitter.com/realDonaldTrump/profile_image?size=original`
  //     );
  //     console.log(picture.data);
  //     res.status(200).send(picture);
  //   }
};
