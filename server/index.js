const express = require("express");
const session = require("express-session");
const massive = require("massive");
require("dotenv").config();
const gs = require("gradient-string");
const { SERVER_PORT, SESSION_SECRET } = process.env;

const repCtrl = require("./controllers/representativeContoller");

const app = express();

app.use(express.json());
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);

app.get("/api/representatives", repCtrl.getRepresentatives);
app.get("/api/representatives/picture", repCtrl.getRepsPicture);

app.listen(SERVER_PORT, () =>
	console.log(gs.summer(`${SERVER_PORT} is listening`))
);
