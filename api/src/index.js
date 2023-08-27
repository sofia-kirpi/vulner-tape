const express = require("express");
const cors = require("cors");
require("dotenv").config();

const router =  require("./routing");
const { pg } = require("./initializers");
const errorsHandler = require("./middleware/errorsHadler");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorsHandler);

app.listen(port, () => {
  pg.authenticate().then(() => console.log("Postgres connected!"));
  console.log(`Server started on port ${port}!`);
});