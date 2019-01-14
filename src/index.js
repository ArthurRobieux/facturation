import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");
const club_id = String(root.dataset.club_id);

ReactDOM.render(<Home club_id={club_id} />, document.getElementById('root'));

serviceWorker.unregister();
