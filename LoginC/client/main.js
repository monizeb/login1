import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
ServiceConfiguration.configurations.upsert(
  { service: 'weibo' },
  {
    $set: {
      loginStyle: "popup",
      clientId: "1292962797", // See table below for correct property name!
      secret: "75a730b58f5691de5522789070c319bc"
    }
  }
);
