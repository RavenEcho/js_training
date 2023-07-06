//task1
const http = require("http");
const os = require("os");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const currentUser = os.userInfo().username;
  const operatingSystem = os.type();
  const uptimeInMinutes = Math.floor(os.uptime() / 60);
  const currentWorkingDirectory = process.cwd();
  const serverFileName = path.basename(__filename);
  const pageContent = fs.readFileSync(
    path.join(__dirname, "index_1.html"),
    "utf8"
  );

  const updatedPageContent = pageContent
    .replace("{{currentUser}}", currentUser)
    .replace("{{operatingSystem}}", operatingSystem)
    .replace("{{uptimeInMinutes}}", uptimeInMinutes)
    .replace("{{currentWorkingDirectory}}", currentWorkingDirectory)
    .replace("{{serverFileName}}", serverFileName);

  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;

  res.end(updatedPageContent);
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
