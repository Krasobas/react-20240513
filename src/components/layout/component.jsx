import {Header} from "../header/component.jsx";
import {Footer} from "../footer/component.jsx";
import {ScrollProgressBar} from "../scroll-progress-bar/component.jsx";

export const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <ScrollProgressBar/>
            {children}
            <Footer/>
        </div>
    );
}