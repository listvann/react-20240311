import { Dish } from "../dish/component.jsx";

export const Menu = ({menu}) => {
    if(!menu?.length){
        return null;
    }

    return (<ul>
            {menu.map(dish =>
                // eslint-disable-next-line react/jsx-key
                <li>
                    <Dish name={dish.name}/>
                </li>
            )}
        </ul>)
}