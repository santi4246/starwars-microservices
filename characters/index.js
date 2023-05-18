const server = require("./src/server");

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Characters server is listening on port ${PORT}`);
});