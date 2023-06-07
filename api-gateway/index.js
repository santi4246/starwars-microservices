const server = require("./src/server");

const PORT = 443;

server.listen(PORT, () => {
    console.log(`Server proxy Gateway is listening on port ${PORT}`);
});