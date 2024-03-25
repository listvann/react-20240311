/* eslint-disable react/no-children-prop */
import React from "react";
import ReactDOM from "react-dom/client";
import {Restaurant} from "./components/restaraunt/restaurant";
import { restaurants } from "../materials/mock";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  restaurants.map(item => (<Restaurant name={item.name} menu={item.menu} reviews={item.reviews}/>))
);

