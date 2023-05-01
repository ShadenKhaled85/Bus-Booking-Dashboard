const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const conn = require("../db/dbConnection");
const admin = require("../middleware/admin");
const authorized = require("../middleware/authorize");
const util = require("util");
const fs = require("fs");

const { query } = require("express");
//admin [create, update, delete, list]

//create(add)
router.post(
  "",
  admin,
  body("from")
    .isString()
    .withMessage("please, enter a starting point")
    .isLength({ min: 3 })
    .withMessage("place should be 3 characters at least"),
  body("to")
    .isString()
    .withMessage("please, enter an ending point")
    .isLength({ min: 3 })
    .withMessage("place should be 3 characters at least"),
  body("day")
    .isString()
    .withMessage("please, enter what day")
    .isLength({ min: 3 })
    .withMessage("day should be 3 characters at least"),
  body("time")
    .isString()
    .withMessage("please, enter what time")
    .isLength({ min: 1 })
    .withMessage("time should be 1 character at least"),
  body("duration")
    .isString()
    .withMessage("please, enter your duration")
    .isLength({ min: 1 })
    .withMessage("duration should be 1 characters at least"),
  body("ticket_price")
    .isString()
    .withMessage("please, enter a ticket price")
    .isLength({ min: 1 })
    .withMessage("ticket price should be 1 character at least"),
  body("max_travelers")
    .isString()
    .withMessage("please, enter a valid max travelers")
    .isLength({ min: 1 })
    .withMessage("max travelers should be 1 characters at least"),  

  async (req, res) => {
    try {
      //1) validation request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //2) prepare appointment object
      const appointments = {
        from: req.body.from,
        to: req.body.to,
        day: req.body.day,
        time: req.body.time,
        duration: req.body.duration,
        ticket_price: req.body.ticket_price,
        max_travelers: req.body.max_travelers,
      };

      //3) insert appointment into database
      const query = util.promisify(conn.query).bind(conn);
      await query("insert into routes set ?", appointments);
      res.status(200).json({
        msg: "appointments created",
      });
    } catch (err) {
      res.status(400).json(err);
    }
  }
);

//update
router.put(
  "/update/:id",
  admin,
  body("from")
    .isString()
    .withMessage("please, enter a starting point")
    .isLength({ min: 3 })
    .withMessage("place should be 3 characters at least"),
  body("to")
    .isString()
    .withMessage("please, enter an ending point")
    .isLength({ min: 3 })
    .withMessage("place should be 3 characters at least"),
  body("day")
    .isString()
    .withMessage("please, enter what day")
    .isLength({ min: 3 })
    .withMessage("day should be 3 characters at least"),
  body("time")
    .isString()
    .withMessage("please, enter what time")
    .isLength({ min: 1 })
    .withMessage("time should be 1 character at least"),
  body("duration")
    .isString()
    .withMessage("please, enter your duration")
    .isLength({ min: 1 })
    .withMessage("duration should be 1 characters at least"),
  body("ticket_price")
    .isString()
    .withMessage("please, enter a ticket price")
    .isLength({ min: 1 })
    .withMessage("ticket price should be 1 character at least"),
  body("max_travelers")
    .isString()
    .withMessage("please, enter a valid max travelers")
    .isLength({ min: 1 })
    .withMessage("max travelers should be 1 characters at least"),

  async (req, res) => {
    try {
      const query = util.promisify(conn.query).bind(conn);

      //1) validation request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //2) check if appointment exist
      const appointment = await query(
        "select * from routes where id = ?",
        [req.params.id]
      );

      if (!appointment[0]) {
        res.status(404).json({
          msg: "appointment doesn't exist",
        });
      }

      //3) prepare qualification object
      const appointmentObj = {
        from: req.body.from,
        to: req.body.to,
        day: req.body.day,
        time: req.body.time,
        duration: req.body.duration,
        ticket_price: req.body.ticket_price,
        max_travelers: req.body.max_travelers,
      };

      //3) insert qualification into database

      await query("update routes set ? where id = ?", [
        appointmentObj,
        appointment[0].id,
      ]);
      res.status(200).json({
        msg: "appointment updated successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
);

//delete
router.delete("/delete/:id", admin, async (req, res) => {
  try {
    const query = util.promisify(conn.query).bind(conn);

    //1) check if appointment exist or not
    const appointment = await query(
      "select * from routes where id = ?",
      [req.params.id]
    );
    if (!appointment[0]) {
      res.status(404).json({ msg: "appointment doesn't exist" });
    }
    //delete appointment from database
    await query("delete from routes where id = ?", [
      appointment[0].id,
    ]);
    res.status(200).json({
      msg: "appointment deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//list
router.get("/list", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  const appointment = await query("select * from routes");
  res.status(200).json(appointment);
});
module.exports = router;