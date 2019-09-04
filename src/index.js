import React from 'react';
import ReactDOM from 'react-dom';
// import './app/styles/style.css';

// import DisplayElement from "./app/components/DisplayElement";
import Users from "./app/components/Users";

const USERS = ['Anna', 'Olga', 'Victor', 'Anton'];

ReactDOM.render(<Users items={USERS}/>,
    document.getElementById('root'));
