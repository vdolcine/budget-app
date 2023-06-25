import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "hello from the server" });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost: ${PORT}`);
});
