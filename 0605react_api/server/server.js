const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

// HTTP Methods
// 웹 브라우저 <-> 서버
// HTTP Protocol : TCP/IP 기반으로 클라이언트와 서버 사이에 이루어지는 요청/응답 프로토콜
// HTTP - TCP/IP
// QUIC - UDP 기반으로 빠른 전송 속도를 가지는 프로토콜

// HTTP Method : GET, POST, PUT, DELETE, PATCH (그외 OPTIONS, HEAD, TRACE, CONNECT 등등)
// 라이브러리/프레임워크에서 각각의 프로토콜을 사용하기 위해 제공하는 메서드를 사용하면 됨
// GET : 데이터를 요청하기 위해 사용하는 메서드 - 탈취 당하기 쉬어 보안에 취약
// POST : 데이터를 생성하기 위해 사용되는 메서드 - 보안상 안정성이 높음
// PUt : 데이터를 업데이트하기 위해 사용되는 메서드 - 데이터를 전체적으로 업데이트
// PATCH : 데이터를 업데이트하기 위해 사용되는 메서드 - 데이터의 일부분만 업데이트
// DELETE : 데이터를 삭제하기 위해 사용되는 메서드

// REST API : HTTP 메서드의 목적에 맞게끔 메서드를 사용하여 API를 설계하는 것
// HTTPS : HTTP에서 보안계층이 추가된 것 (HTTP인증서를 구매하여 연결해야하지만(백엔드/인프라개발자), 요새는 배포툴이 알아서 해줌)

// {id, text, completed}
let todos = [{ id: 1, text: "아침 먹기", completed: false }];

app.get("/todos", (req, res) => {
  res.json(todos);
});

// text - string
app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: uuidv4(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  res.json(todos.find((todo) => todo.id === id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
