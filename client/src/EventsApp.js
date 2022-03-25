import React, {Fragment} from 'react';
import Tabs from './shared/uiComponents/Tabs';

import EventTab from './event/pages/EventTab';
import {Switch, Route} from 'react-router-dom';

import {ReactQueryDevtools} from 'react-query/devtools';
import FloatingButton from './shared/uiComponents/FloatingButton';
import FormCreateEvent from './shared/formstuff/FormCreateEvent';
import HomePage from './event/pages/HomePage';
function EventsApp () {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route exact path="/event">
          <Tabs>
            <EventTab />
          </Tabs>
          <FloatingButton />
        </Route>
        <Route path="/event/create">
          <FormCreateEvent />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} />
    </Fragment>
  );
}

export default EventsApp;
