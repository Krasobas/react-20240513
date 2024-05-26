import {Dish} from "../dish/component.jsx";
import {Counter} from "../counter/component.jsx";

export const Menu = ({ menu }) => {
    if(!menu?.length) return
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li>
                        <div key={dish.id}>
                            <Dish dish={dish}/>
                            <Counter max={5} min={0} initialValue={0} />
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}