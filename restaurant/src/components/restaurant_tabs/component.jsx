import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {
    return (restaurants.map((restaurant, index) => {
        // eslint-disable-next-line react/jsx-key
        return (<Tab title={restaurant.name}
                    onClick={() => onTabClick(index)}
                    isActive={index === currentIndex}
        />)
    }))
}