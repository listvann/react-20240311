import { Reviews } from '../reviews/component';
import { Menu } from '../menu/component';


export const Restaurant = ({ restaurant }) => {
    if(!restaurant) {
        return null
    }
    const { name,  menu, reviews} = { restaurant }
    console.log(restaurant)
    return (
        <div> 
            {name ? name : "NoName"}
            {/* {restaurant.name} */}
            {!!menu?.length && (
               <div>
                  <h3>Меню</h3>
                  < Menu menu = {menu}/>
               </div>
            )}

            <h3>Отзывы</h3>
            {reviews?.length ? (
                <div>
                    <Reviews reviews = {reviews}/>
                </div>
            ) : "Отзывы"}
        </div>
    )

};



/* export const Restaurant =({name,menu,reviews})=>{

    return <div>
        <h3>{name}</h3>
            <ul>
                {menu.map(item=> (<li>{item.name}</li>))}
            </ul> 
        <h3>Отзывы</h3>
            <ul>
                {reviews.map(item=> (<li>{item.text} rating: {item.rating}</li>))}
            </ul>
            </div>
} */