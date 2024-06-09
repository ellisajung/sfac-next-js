const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.json());

const todos = [
  {
    id: 1,
    text: "아침먹기",
    completed: false,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todo", (req, res) => {
  res.json(todos);
});

app.post("/todo", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json(todo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
