import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock';
import { Restaurants } from './restaurants/component';
import { Layout } from './layout/component';
import { Restaurant } from './restaurant/component';
import { Reviews } from './reviews/component';
import { Review } from './review/component';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Layout>
  <div>
    {restaurants.map((restaurant) => (
      <Restaurant restaurant = {restaurant}/>
    ))} 
  </div>
</Layout>
)

/* import {Restaurant} from "./components/restaurant/restaurant";
import { restaurants } from "../materials/mock";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  restaurants.map(item => (<Restaurant name={item.name} menu={item.menu} reviews={item.reviews}/>))
);
 */