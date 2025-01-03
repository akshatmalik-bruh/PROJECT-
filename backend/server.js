const express = require("express");
const cors = require("cors");
const app = express();
const port = 6969 || process.env.PORT;
app.use(cors)

app.use(cors());

app.get("/api/kota", (req, res) => {
  const data = [
    {
      id: 1,
      name: "City Park",
    },
    {
      id: 2,
      name: "Garadia Mahadev Temple",
    },
    {
      id: 3,
      name: "Kishore Sagar Lake",
    },
    {
      id: 4,
      name: "Chambal Riverfront",
    },
    {
      id: 5,
      name: "Seven Wonders Park",
    },
  ];

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
