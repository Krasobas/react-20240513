import {useState} from "react";

export function useCount(defaultValue) {
    const [count, setCount] = useState(defaultValue);
    const increment = (count) => setCount(count + 1);
    const decrement = (count) => setCount(count - 1);
    return { count, increment, decrement };
}