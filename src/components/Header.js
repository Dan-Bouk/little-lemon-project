import Nav from "./Nav";
import logo from "../images/Asset 16@4x.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="a colored Little Lemon logo" />
            <Nav />
        </header>
    );
}

export default Header;