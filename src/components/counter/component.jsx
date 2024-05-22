import {useCount} from "../../hooks/useCount.js";

export const Counter = () => {
    const {count, increment, decrement} = useCount();
    return (
        <>
            <button onClick={() => increment(count)}>+</button>
            <span>count</span>
            <button onClick={() => decrement(count)}>-</button>
        </>
    )
}