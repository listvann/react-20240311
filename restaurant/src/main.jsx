// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

/* import {Restaurant} from "./components/restaurant/restaurant";
import { restaurants } from "../materials/mock";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  restaurants.map(item => (<Restaurant name={item.name} menu={item.menu} reviews={item.reviews}/>))
);
 */