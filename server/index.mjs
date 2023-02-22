import express from "express";

const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "hello from the server" });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost: ${PORT}`);
});
