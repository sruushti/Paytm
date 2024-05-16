const express = require("express");
const rootrouter = require("./routes/index");
const cors = require('cors'); //connect/express middleware

const app = express();

app.use(express.json()); //body-parser
app.use(cors());

app.use("/api/v1", rootrouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});