const http = require("http");
const os = require("os");
const fs = require("fs");
const personalModule = require("./personalmodule");

const server = http.createServer((req, res) => {
  const userName = os.userInfo().username;
  const greetingMessage = personalModule.getGreetingMessage(userName);

  const currentTime = new Date();
  const formattedTime = currentTime
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  const timeZoneOffset = (currentTime.getTimezoneOffset() / -60)
    .toString()
    .padStart(2, "0");
  const gmtOffset = `GMT${
    currentTime.getTimezoneOffset() > 0 ? "-" : "+"
  }${timeZoneOffset}:00`;

  fs.readFile("index_2.html", "utf8", (err, htmlContent) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Internal Server Error");
      res.end();
      return;
    }

    const renderedHtml = htmlContent
      .replace("{{currentTime}}", formattedTime)
      .replace("{{gmtOffset}}", gmtOffset)
      .replace("{{greetingMessage}}", greetingMessage);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(renderedHtml);
    res.end();
  });
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
