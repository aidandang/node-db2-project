const server = require("./api/server.js");

// Start the server on a specified port.
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));