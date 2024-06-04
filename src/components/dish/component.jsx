import {useCount} from "../../hooks/useCount.js";
import {Counter} from "../counter/component.jsx";

export const Dish = ({ dish }) => {
    const {count, increment, decrement} = useCount({max:9, min:0, initialValue:3});

    return (
        <div>
            <span>{dish.name}</span>
            <Counter value={count} increment={increment} decrement={decrement}/>
        </div>
    )
}