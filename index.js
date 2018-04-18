const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./server/routes");

const publicWeb = process.env.PUBLICWEB || "./server/www";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/"));
app.use(express.static(publicWeb));
console.log(`serving ${publicWeb}`);
app.use("/api", routes);
app.get("*", (req, res) => {
  res.sendFile(`index.html`, { root: publicWeb });
});

const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
