const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.EXPRESS_PORT || 5000;
const { auth } = require("express-oauth2-jwt-bearer");

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: process.env.AUTH0_TOKEN_SIGNING_ALG,
});

app.use(cors());
app.use(express.json());
app.use(jwtCheck);

app.use("/api/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
