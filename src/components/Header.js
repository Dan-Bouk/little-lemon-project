import Nav from "./Nav";
import logo from "../images/Asset 16@4x.png"
import "./header.css"

function Header() {
    return (
        <header>
            <img src={logo} className="logo-header" alt="a colored Little Lemon logo" />
            <Nav />
        </header>
    );
}

export default Header;