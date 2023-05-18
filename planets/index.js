const server = require("./src/server");

const PORT = 3004;

server.listen(PORT, () => {
  console.log(`Planets server is listening on port ${PORT}`);
});