import React from 'react';
import { render } from 'react-dom';
import { Router, browerHistory } from 'react-router';
import routes from './routes';

render(<Router history={browerHistory} routes={routes} />, document.getElementById('app'));
