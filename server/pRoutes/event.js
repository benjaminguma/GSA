const express = require ('express');
const EventModel = require ('../p_models/event');
const HttpError = require ('../p_models/error');
const Router = express.Router ();

Router.get ('/', async (req, res, next) => {
  try {
    const allEvents = await EventModel.getAllEvents ();
    return res.json (allEvents);
  } catch (error) {
    return next (new HttpError ('error when trynig to get all events', 500));
  }
});

Router.get ('/today', async (req, res, next) => {
  try {
    const todaysEvent = await EventModel.getEventsOnDay (req.query);
    if (!todaysEvent.length)
      return res.status (200).json ({message: 'oopsie no events for today'});
    res.json (todaysEvent);
  } catch (err) {
    console.log (err);
    const error = new HttpError ('error on /today', 500);
    next (error);
  }
});

Router.get ('/month', async (req, res, next) => {
  try {
    const monthEvents = await EventModel.getEventsForMonth ({
      date: req.query.date,
    });
    if (!monthEvents)
      return res.json ({message: 'there are no events for this month'});
    res.json (monthEvents);
  } catch (err) {
    console.log (err);
    const error = new HttpError ('an error occured please try again', 500);
    next (error);
  }
});

Router.get ('/within', async (req, res, next) => {
  const {from, to} = req.query;
  console.log ({po: 'pppp'});
  try {
    const data = await EventModel.getEventsInTime ({from, to});
    if (!data.length)
      return res.json ({message: 'no events occured during this time'});
    res.json (data);
  } catch (err) {
    console.log (err);
    const error = new HttpError ('an error occured please try again', 500);
    next (error);
  }
});
Router.post ('/', (req, res, next) => {});

module.exports = Router;
