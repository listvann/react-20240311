import { useState } from 'react';
import { Layout } from './components/layout/component.jsx';
import { RestaurantTabs } from "./components/restaurant_tabs/component.jsx";
import { Restaurant } from './components/restaurant/restaurant.jsx';
import { restaurants } from "./constants/mock.js";
import { getCurrentRestaurantIndexStorage, setCurrentRestaurantIndexStorage } from './components/utils/storage.jsx';

const active_restaurant_index_storage_key = 'currentRestaurantIndex';

export const App = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState (() => getCurrentRestaurantIndexStorage (active_restaurant_index_storage_key));
    const currentRestaurant = restaurants[currentRestaurantIndex];

    return (
        <Layout>
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={(index) => {
                    setCurrentRestaurantIndex(index),
                    setCurrentRestaurantIndexStorage(active_restaurant_index_storage_key, index)
                }}
                currentIndex ={currentRestaurantIndex}
            />
            {<Restaurant restaurant={currentRestaurant}/>}
        </Layout>
    )
}
