const express = require("express");
const MsgModel = require("../p_models/message");
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  try {
    const todaysMessages = await MsgModel.getMessages(req.query);
    if (!todaysMessages.length)
      return res.json({ message: `no results found on ${req.query.key}` });

    res.json(todaysMessages);
  } catch (error) {
    return next(error);
  }
});
Router.get("/search", async (req, res, next) => {
  try {
    const TodaysMessages = await MsgModel.search(req.query);
    if (!todaysMessages.length)
      return res.json({ message: `no results found` });
    res.json(TodaysMessages);
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;
