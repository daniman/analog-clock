import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './main.html';
import Clock from '../imports/ui/Clock';

Meteor.startup(() => {
  render(<Clock size={650} />, document.getElementById('render-target'));
});
