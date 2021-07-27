const app = require("express")();
const cors = require("cors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

app.use(cors());

app.get("/hello", (req, res) => {
  res.status(StatusCodes.OK).json({ message: ReasonPhrases.OK });
});
