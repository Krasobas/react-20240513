import {useCount} from "../../hooks/useCount.js";

export const Counter = ({max = 5, min = 0, initialValue = 0} = {}) => {
    const {count, increment, decrement} = useCount({max:9, min:min, initialValue:3});

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}