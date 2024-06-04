
export const Counter = ({value, max = 5, min = 0, decrement, increment} = {}) => {

    return (
        <>
            <button onClick={() => decrement()} disabled={value === min}>-</button>
            <span>{value}</span>
            <button onClick={() => increment()} disabled={value === max}>+</button>
        </>
    )
}