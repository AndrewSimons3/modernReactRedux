// 1 Import the Reacct and ReactDOM libraries

import React from 'react';
import { ReactDOM } from 'react';
import App from './App';
// 2 Get a ref to the div with ID root
const el = document.getElementById('root')
//3  Tell react to take control of that element
const root = ReactDOM.createRoot(el);
//4 create a component
// 5 show the component on the screen
root.render(<App />)