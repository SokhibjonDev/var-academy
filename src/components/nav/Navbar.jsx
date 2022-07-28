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
                        <a href="#!">Asosiy </a>
                    </li>
                    <li>
                        <a href="#!">Sertifikat</a>
                    </li>
                    <li>
                        <a href="#!">Biz haqimizda </a>
                    </li>
                    <li>
                        <a href="#!">Blog </a>
                    </li>

                    <li>
                        <a href="#!">Contact</a>
                    </li>
                </ul>

            </ul>
        </div>
    );
}
export default Navbar;