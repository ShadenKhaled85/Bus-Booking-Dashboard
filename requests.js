const router = require("express").Router();
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper

// LIST requests
router.get("", admin, async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  let search = "";
  if (req.query.search) {
    // QUERY PARAMS
    search = `where name LIKE '%${req.query.search}%' `;
  }
  const requests =
    await query(`SELECT requests.id,requests.user_id,requests.route_id,requests.status,users.name,routes.from,routes.to,routes.day,routes.time
    FROM requests
    LEFT JOIN users ON requests.user_id = users.id
    LEFT JOIN routes ON requests.route_id = routes.id
     ${search}`);
  res.status(200).json(requests);
});

//requests.id,requests.user_id,requests.route_id,requests.status,users.name,routes.from,routes.to

// UPDATE requests (accept or reject) [ADMIN]
router.put(
  "/:id", // params
  admin,
  async (req, res) => {
    try {
      // 1- VALIDATION REQUEST [manual, express validation]
      const query = util.promisify(conn.query).bind(conn);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- CHECK IF request EXISTS OR NOT
      const request = await query("select * from requests where id = ?", [
        req.params.id,
      ]);
      if (!request[0]) {
        res.status(404).json({ ms: "request not found !" });
      }

      // 3- PREPARE request OBJECT
      requeststatus = req.body.requeststatus;

      // 4- UPDATE request
      await query("update requests set status = ? where id = ?", [
        requeststatus,
        request[0].id,
      ]);
      res.status(200).json({
        msg: "request updated successfully",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
