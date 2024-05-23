import {useCount} from "../../hooks/useCount.js";

export const Counter = ({max, min, defaultValue}) => {
    const {count, increment, decrement} = useCount(defaultValue);
    return (
        <>
            <button onClick={() => count > min && decrement(count)}>-</button>
            <span>{count}</span>
            <button onClick={() => count < max && increment(count)}>+</button>

        </>
    )
}