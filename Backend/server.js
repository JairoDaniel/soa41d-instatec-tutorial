const express = require("express");
const app = express();
const port = 3000;

app.get("/hello-world", (req, res) => res.send("hello madarsfakas"));

app.listen(port, () => console.log(`Listening on port ${port}`));
