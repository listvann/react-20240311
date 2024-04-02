export const Restaurant =({name,menu,reviews})=>{

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
}