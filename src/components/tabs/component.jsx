import {Tab} from "../tab/component.jsx";

export const Tabs = ({indexes, onClick}) => {
    return (
        indexes.map((index) => (<Tab index={index} onClick={onClick}/>))
    )
}