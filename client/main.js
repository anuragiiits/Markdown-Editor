import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/apps';

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.render-target'));
})

