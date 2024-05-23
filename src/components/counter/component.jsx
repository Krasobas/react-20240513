import {useCount} from "../../hooks/useCount.js";

export const Counter = ({max, min}) => {
    const {count, increment, decrement} = useCount();
    return (
        <>
            <button onClick={() => count > min && decrement(count)}>-</button>
            <span>{count}</span>
            <button onClick={() => count < max && increment(count)}>+</button>

        </>
    )
}