import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({activeTabIndex, restaurants, onTabClick}) => {
    return (
        restaurants.map(({name}, index) => (
            <Tab title={name} onClick={() => onTabClick(index)} isActive={activeTabIndex === index}></Tab>
        ))
    )
}