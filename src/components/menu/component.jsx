import {Dish} from "../dish/component.jsx";

export const Menu = ({ menu }) => {
    if(!menu?.length) return
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li>
                        <Dish dish={dish} key={dish.id}/>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}