import { config } from "dotenv";
import express from "express";
config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "Joke",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "Jokee",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "Jokeee",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "Jokeeee",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "Jokeeeee",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
