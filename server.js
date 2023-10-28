const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
});

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Bienvenue sur le backend du wordle de soja" });
// });

//routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

//set port & listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
