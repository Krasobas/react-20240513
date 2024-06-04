import {useState, useEffect} from "react";

export const ReviewButtons = ({max= 5, onClick}) => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        const newNumbers = Array.from({length: max}, (_, i) => i + 1);
        setNumbers(newNumbers);
    }, [max]);
    return (
            <div>
                {numbers.map((number, i) => (<button key={i} onClick={() => onClick(number)}>{number}</button>))}
            </div>
    )
}