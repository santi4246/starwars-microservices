const server = require("./src/server");

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server proxy Gateway is listening on port ${PORT}`);
});