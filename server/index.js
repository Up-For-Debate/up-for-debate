const express = require("express");
const session = require("express-session");
const massive = require("massive");
require("dotenv").config();
const gs = require("gradient-string");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const repCtrl = require("./controllers/representativeContoller");
const electionCtrl = require("./controllers/upcomingElectionsController");
const stateCtrl = require('./controllers/usStateController')

const app = express();

app.use(express.json());
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);

massive({
	connectionString: CONNECTION_STRING
	,ssl: {
		rejectUnauthorized: false
	}
}).then( db => {
  app.set('db', db)
  console.log(gs.mind(`It's alive! The database is alive!`))
}).catch( err => console.log(err))

app.get("/api/representatives", repCtrl.getRepresentatives);
app.get("/api/representatives/picture", repCtrl.getRepsPicture);

app.get("/api/elections", electionCtrl.getUpcomingElections);

app.get("/api/states/:usstate", stateCtrl.getRegUrl)



app.listen(SERVER_PORT, () =>
	console.log(gs.summer(`${SERVER_PORT} is listening`))
);
