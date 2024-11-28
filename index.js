import express from "express";

const app = express();
app.use(express.json());
const port = 503;

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    age: 25,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@email.com",
    age: 30,
  },
  {
    id: 3,
    name: "Jorja Smith",
    email: "jorja@email.com",
    age: 35,
  },
];

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

// app.get("/users", (req, res) => {
//   res.send(users);
// });

app.get("/", (req, res) => {
  res.send("Welcome to my personal api!");
});

app.get("/user", (req, res) => {
  res.json(userDetails);
});

app.get("/contact", (req, res) => {
  res.json(userContact);
});

//getting all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//Getting a single user by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

app.post("/users", (req, res) => {
  let user = req.body; //Used to get request from user body
  if (user) {
    user = { id: users.length + 1, ...user }; //This line adds an id tot he user
    users.push(user); //add user to users array
    res.status(201).json({ message: "user created successfully", user }); // send success response
  } else if (!user) {
    res.status(400).json({ message: "user not found" }); //Send error messafe if user not found
  }
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  if (!id) {
    req.status(400).json({ message: "Id is required." });
  } else if (!name || !email || !age) {
    res.status(400).json({ message: "all fields are required" });
  }

  const user = users.findIndex((user) => user.id === parseInt(id));
  users[user] = { id: parseInt(id), name, email, age };

  res
    .status(200)
    .json({ message: "user updated successfully", user: users[user] });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
