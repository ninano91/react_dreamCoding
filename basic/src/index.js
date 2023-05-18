import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppMentor from './AppMentor';
import AppMentorsReducer from './AppMentorsReducer';
// import AppXY from './AppXY';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppMentorsReducer />);
// root.render(<AppMentor />);
// root.render(<AppXY />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
