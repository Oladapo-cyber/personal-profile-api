import express from "express";

const app = express();

const port = 503;

const userDetails = [
  {
    name: "Yinusa Oladapo",
    sport: "football",
  },
];
const userContact = [
  {
    email: "ydapo50@gmail.com",
    phone: "08133437231",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my personal api!");
});

app.get("/user", (req, res) => {
  res.json(userDetails);
});

app.get("/contact", (req, res) => {
  res.json(userContact);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
