import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './main.html';
import Home from '../imports/ui/Home';

Meteor.startup(() => {
  render(<Home />, document.getElementById('render-target'));
});
