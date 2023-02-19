const express = require("express");
const app = express();
require("dotenv").config();
const tasks = require("./routes/task");
const cors = require("cors");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
