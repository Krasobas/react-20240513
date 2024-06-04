import {useState, useCallback} from "react";

export function useCount({max = 5, min = 0, initialValue = 0} = {}) {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount((current) => current < max ? current + 1 : current)
    }, [max])
    const decrement = useCallback(() => {
        setCount((current) => current > min ? current - 1 : current)
    }, [min])
    return { count, increment, decrement };
}