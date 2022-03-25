const express = require ('express');
const CategoryModel = require ('../p_models/category');
const HttpError = require ('../p_models/error');
const Router = express.Router ();

Router.get ('/:category/today', async (req, res, next) => {
  try {
    const todaysEvent = await CategoryModel.getEventsOnDay (req.query);
    if (!todaysEvent.length)
      return res.status (200).json ({message: 'oopsie no events for today'});
    res.json (todaysEvent);
  } catch (err) {
    console.log (err);
    const error = new HttpError ('error on today', 500);
    next (error);
  }
});

Router.post ('/:category/month', async (req, res, next) => {
  try {
    const monthEvents = await CategoryModel.getEventsForMonth (req.query.month);
    if (!monthEvents)
      return res.json ({message: 'there are no events for this month'});
    res.json (monthEvents);
  } catch (err) {
    const error = new HttpError ('an error occured please try again', 404);
    next (error);
  }
});

module.exports = Router;
