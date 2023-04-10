const express = require("express");
const app = express();

const port = 3010;
const router = express.Router;
const aRouter = require("./router/a");
const bRouter = require("./router/b");

// app.get("/", (req, res) => {
//   res.send("Hello, Express");
// });

// app.post("/", (req, res) => {
//   res.send("Hello, Express2 post request");
// });

// app.put("/", (req, res) => {
//   res.send("Hello, Express2 put request");
// });

// app.delete("/", (req, res) => {
//   res.send("Hello, Express2 delete request");
// });

// app.listen(port, () => {
//   console.log(`Server Listening on Port ${port}!!!!`);
// });

app.use("/a", aRouter);
app.use("/b", bRouter);

app.listen(3010, () => console.log("Example app listening on port 3010!"));

// req, res 요청, 응답

// 서버 실행 node App.js

// 어떤식으로 구축되는 지 공부 필요

// express 원리 이해

// 예시 생성 ex) chat GPT 서버 생성 및 실행 및 간단한 페이지와 연동

// status code 는 어떤식으로 구현하면 좋을 지 생각

// 간단한 서버? 백엔드에서 db는 서버와 연동해서 사용??? 아니면 db자체도 따로 구축하는건지 추가적으로 예전에 table은 서버쪽에서 생성하는 걸 봤는데 이건 틀만 생성하고
// 저장만 하는 건지

// express 사이트 예제 따라해보기
// 1. 라우팅 o
// 2. 응답 메소드
