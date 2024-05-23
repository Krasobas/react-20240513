import {useState} from "react";

export function useCount() {
    const [count, setCount] = useState(0);
    const increment = (count) => setCount(count + 1);
    const decrement = (count) => setCount(count - 1);
    return { count, increment, decrement };
}