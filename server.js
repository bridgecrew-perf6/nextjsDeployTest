const express = require("express");
const next = require("next");
// 데브 상태냐 아니냐?
const dev = process.env.NODE_ENV !== "production";

// 포트가 배포상태일 경우 3000 아닐경우 정해준대로 ㄱ
const port = parseInt(process.env.PORT, 10) || 3000;

// next 앱 데브냐 아니냐로 가져옴
const app = next({ dev });

// next의 리퀘스트 핸들러
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  let isAppGoingToBeClose = false; // SIGNIT 시그널을 받았는지 여부, 앱이 곧 종료 될 것임을 의미함.

  server.use((req, res, next) => {
    if (isAppGoingToBeClose) {
      // 앱이곧 종료될 경우
      // 커넥션을 끊어버린다
      res.set("Connection", "close");
    }
    // 그리고 넘김
    next();
  });
  server.get("/a", (req, res) => {
    console.log("???");
    return app.render(req, res, "/a", req.query);
  });
  server.get("/b", (req, res) => {
    // return res.json({ asd: 123 });
    return app.render(req, res, "/b", req.query);
  });
  server.get("/posts/:id", (req, res) => {
    console.log(req.params);
    return app.render(req, res, "/posts", { id: req.params.id });
  });
  // 위에 요청을 제외한 요청들은 next requestHandler에서 관리한다.
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const listeningServer = server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      `서버켜짐 port : ${port} state : ${process.env.NODE_ENV} isDev:${
        dev ? "개발" : "프로덕션"
      }`
    );
    // 서버가 켜지면 pm2에게 구동이 완료됨을 전달
    if (process.send) {
      process.send("ready");
      console.log(`sent to pm2 with ready message at ${new Date()}`);
    }
  });
  process.on("SIGINT", () => {
    console.log("앱이 곧 종료됩니다. received signit signal");
    isAppGoingToBeClose = true; // 앱이 곧 꺼짐

    // pm2 재시작 신호가 들어오면 서버를 종료한다.
    listeningServer.close((err) => {
      console.log("server closed");
      process.exit(err ? 1 : 0);
    });
  });
});
