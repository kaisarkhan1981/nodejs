const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.listen(3000, () => console.log("server is running on port 3000"));
