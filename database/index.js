const server = require("./src/server");
const PORT = 3005;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});