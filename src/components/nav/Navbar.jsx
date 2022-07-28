import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <ul className="d-flex " >
                <a href="#!" className="Logo">
                    <span>VAR </span>  ACADEMY
                </a>
                <ul>
                    <li>
                        <a href="#!">Home </a>
                    </li>
                    <li>
                        <a href="#!">Cretificate</a>
                    </li>
                    <li>
                        <a href="#!">About Us </a>
                    </li>
                    <li>
                        <a href="#!">Blog </a>
                    </li>

                    <li>
                        <a href="#!">Contanct</a>
                    </li>
                </ul>

            </ul>
        </div>
    );
}
export default Navbar;