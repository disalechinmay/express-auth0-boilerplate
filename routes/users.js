const express = require("express");
const router = express.Router();
const pool = require("../utils/db");

router.get("/:id", (req, res) => {
  console.log(req);
  pool.query(
    "SELECT * FROM users WHERE uid = $1",
    [req.params.id],
    (err, dbResult) => {
      if (err) {
        res.status(500).send("Database error: " + e);
      } else {
        if (dbResult.rows.length === 1) {
          res.json(dbResult.rows[0]);
        } else {
          res.status(404).send("User not found");
        }
      }
    }
  );
});

module.exports = router;
