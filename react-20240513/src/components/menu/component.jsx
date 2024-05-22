import {Dish} from "../dish/component.jsx";
import {Counter} from "../counter/component.jsx";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li>
                        <div>
                            <Dish dish={dish}/>
                            <Counter/>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}