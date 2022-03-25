import React, {Fragment, useState, useEffect, useMemo} from 'react';
import regular from '../../images/svg/multi.svg';
import multi from '../../images/svg/regular.svg';
import special from '../../images/svg/special.svg';
import './event_type.scss';
import RichField from '../formstuff/RichField';
import Select from '../formstuff/Select';
import CheckSelectItem from './CheckSelectItem';
import Field from '../formstuff/Field';
import UseForm from '../../formStuffs/UseForm';
import Option from './Option';
import {eventSchema} from '../../formStuffs/formSchema';
import {days} from '../../helpers';
import CtaButton from '../uiComponents/CtaButton';
import Decorator from '../../event/components/Decorator';
import Crumb from './Crumb';

const initialState = {
  fields: {
    eventType: '',
    title: '',
    speaker: '',
    cover: '',
    location: '',
    duration: undefined,
    date: 0,
    time: null,
    days: [],
    week: 0,
    year: new Date ().getFullYear (),
  },
};

const weekData = [
  {
    text: 'every',
  },
  {
    text: 'first',
  },
  {
    text: 'second',
  },
  {
    text: 'third',
  },
  {
    text: 'fourth',
  },
  {
    text: 'last',
  },
];
const eventMap = [
  {
    name: 'regular',
    img: regular,
    des: 'for frequent events',
    color: '#E459E4',
  },
  {
    name: 'special',
    img: special,
    des: 'one time events',
    color: 'gold',
  },
  {
    name: 'multi',
    img: multi,
    des: 'themed event for many days',
    color: '#4EA3BA',
  },
];

const FormCreateEvent = () => {
  const [count, SetCount] = useState (0);

  const formHandler = UseForm (initialState, eventSchema);

  const {
    values,
    onChange,
    add,
    formIsValid,
    deleteFieldArray,
    errors,
    isSubmitting,
    toggleSubmit,
  } = formHandler;
  const dais = values['days'];

  return (
    <form onSubmit={e => e.preventDefault ()}>
      {count === 0 &&
        <section className="event_type_pack">
          <div className="container">
            <div className="u-center">
              <h4 className="heading_large weit-2 upp col-p mb-1">
                select event type
              </h4>
            </div>
          </div>

          <div className="container">
            <div className="select_event">
              {eventMap.map ((event, index) => (
                <SelectEventname
                  key={index}
                  {...{...event, index}}
                  onChange={payload => onChange ({name: 'eventType', payload})}
                />
              ))}
            </div>
          </div>
          {values['eventType'] &&
            <div className="u-center mt-3">
              <button
                type="button"
                onClick={() => SetCount (1)}
                className="btn_blue btn_wide heading_med tablet"
              >
                continue
              </button>
            </div>}
          <div className="card p-2" />
        </section>}
      {count === 1 && <EventDetailsForm formData={formHandler} />}
    </form>
  );
};

export default FormCreateEvent;

function SelectEventname({name, img, des, index, onChange}) {
  return (
    <Fragment>

      <input
        type="radio"
        name="eventType"
        id={name}
        className="event_type_check"
        value={name}
        onChange={e => onChange (e.target.value)}
      />
      <label
        htmlFor={name}
        className={`br bg-w event_type event_type_${index}`}
      >

        <div className="grid_txt_1 event_type_det u-center">
          <p className="heading_small weit-2 upp col-p">
            {name}
          </p>
          <img src={img} alt="" className="event_type_img" />
          <p className="event_type_des col-gra-d heading_tiny">{des}</p>
        </div>
      </label>
    </Fragment>
  );
}

function EventDetailsForm({formData}) {
  const {
    onChange,
    values,
    add,
    formIsValid,
    deleteFieldArray,
    errors,
    isSubmitting,
    toggleSubmit,
  } = formData;

  return (
    <Fragment>
      <Decorator />
      <div className="heading_tiny">
        {JSON.stringify (values)}

      </div>
      <div className="container">
        <section className="main_form">
          <div className="u-center">
            <h4 className="heading_large upp weit-2 col-p mb-1">
              event information
            </h4>
          </div>
          <div className="event_form card sha grid_txt_1">
            <div
              className="event_form_banner"
              style={{
                backgroundColor: eventMap.find (
                  ({name}) => name === values['eventType']
                ).color,
              }}
            />
            <Field
              placeholder="e.g hero night"
              label="event title"
              name="title"
              value={values['title']}
              error={errors['title']}
              handleChange={onChange}
            />
            <Field
              type="time"
              placeholder="e.g hero night"
              label="time"
              name="time"
              value={values['time']}
              error={errors['time']}
              handleChange={onChange}
            />
            <Field
              type="number"
              placeholder="e.g 120"
              label="event duration in mins"
              badge="mins"
              name="duration"
              value={values['duration']}
              error={errors['duration']}
              handleChange={onChange}
            />
            {values['eventType'] === 'special' &&
              <Field
                label="date"
                type="date"
                name="date"
                handleChange={onChange}
              />}

            <div className="hr upp">
              when shoud this event occur
            </div>
            <div className="grid_txt_1">

              <Select
                placeholder="e.g sunday"
                label="days"
                name="days"
                value={values['days']}
                multiple
                error={errors['days']}
                add={add}
              >
                {days.map ((day, id) => (
                  <CheckSelectItem text={day} key={id} />
                ))}
              </Select>

              {values['days'].length > 1 &&
                <div className="crumb_pack">
                  {values['days'].map ((el, key) => (
                    <Crumb
                      text={el}
                      key={key}
                      onClose={() => {
                        console.log ({el});
                        add ({
                          payload: {
                            days: [...values['days']].filter (e => e !== el),
                          },
                        });
                      }}
                    />
                  ))}
                </div>}

            </div>
            {values['days'].length === 1 &&
              <Select
                placeholder={`e.g first `}
                name="dayCount"
                value={values['dayCount']}
                label={`which of the ${values['days'][0]}s`}
                onChange={chunk => {
                  onChange (chunk);
                  add ({
                    payload: {
                      week: '',
                    },
                  });
                }}
                add={add}
              >
                {weekData.map ((week, index) => (
                  <Option key={index} {...week} />
                ))}
              </Select>}
            {values['days'].length > 1 &&
              <Select
                placeholder="e.g first week"
                name="week"
                value={values['week']}
                label="what week"
                onChange={chunk => {
                  onChange (chunk);
                  add ({
                    payload: {
                      dayCount: '',
                    },
                  });
                }}
                add={add}
              >
                {weekData.map ((week, index) => (
                  <Option key={index} {...week} />
                ))}
              </Select>}

            <RichField label="description" name="description" />

            <div className="center-flex">
              <CtaButton
                loading={false}
                text={'create event'}
                loadingText="creating event"
              />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
