const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const app = express();
const colors = require("colors");
const chatRoutes = require("./routes/chatRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   //   console.log(req.params.id);
//   const singlechat = chats.find((c) => c._id === req.params.id);
//   res.send(singlechat);
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server is running on ${PORT} port`.yellow.bold));
