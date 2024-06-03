import logo from "../images/Asset 7@4x.png"
import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <img src={logo} className="logo" alt="a black-and-white Little Lemon logo" />
            <span>2024, Little Lemon, All Rights Reserved.</span>
        </footer>
    );
}