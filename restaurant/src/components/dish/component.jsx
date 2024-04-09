import { Counter } from '../counter/component';
import { useCounter} from '../hooks/use_counter';

export const Dish = ({name}) => {
    const {counter, increment, decrement} = useCounter();
   
    return (
    <div>
        <h5>{name}</h5>
        <Counter value = {counter} decrement = {decrement} increment = {increment}/>
    </div>)
}