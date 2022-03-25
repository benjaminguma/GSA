import * as yup from 'yup';

const eventSchema = yup.object ().shape ({
  title: yup.string ().required ('specify the event title'),
  eventType: yup
    .string ()
    .oneOf (['regular', 'special', 'multi'])
    .required ('specify event type'),
  speaker: yup.string (),
  cover: yup.string (),
  location: yup.string (),
  duration: yup
    .number ()
    .min (30, 'event should last for at least 30 mins')
    .transform (function (value, orig) {
      if (this.isType (value)) return value;
      return 0;
    })
    .max (360, 'maximum time is 3hrs')
    .required ('how long is this event'),
  discription: yup
    .string ()
    .min (20, 'event description should be at least 20 characters')
    .max (200, 'discription should not go above 200 '),
  // date: yup.number ().when ('eventType', {
  //   is: 'special',
  //   then: yup
  //     .number ()
  //     .test (
  //       'x',
  //       'event cant be schduled to hold in the past',
  //       (value, ctx) => {
  //         return new Date (Number (value)).getTime () >= new Date ().getTime ();
  //       }
  //     )
  //     .required ('please specify the date'),
  // }),
  days: yup
    .array ()
    .of (yup.string ().required ())
    .test ('is-valid-day', 'specify the day(s) for this event', v => {
      return v.length > 0;
    }),
  dayCount: yup
    .string ()
    .required ('specify which of the days in the month you want'),

  week: yup
    .string ()
    .oneOf (['every', 'first', 'second', 'third', 'fourth', 'last'])
    .required ('which weeks in a month do you waant this event to occur'),
  time: yup.number ().required ('specify the time'),

  month: yup.string ().when ('eventType', {
    is: 'special',
    then: yup.string ().required ('specify the date of this event'),
  }),

  year: yup.number ().required ('specify the year'),
});

export {eventSchema};
