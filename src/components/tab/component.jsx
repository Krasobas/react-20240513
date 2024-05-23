
export const Tab = ({index, onClick}) => {
    return <button onClick={() => onClick(index)}>{index}</button>;
}