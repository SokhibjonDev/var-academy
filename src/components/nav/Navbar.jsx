import "./Navbar.css";
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="d-flex ">
        <a href="/" className="Logo">
          <span>VAR </span>IT ACADEMY
        </a>
        <ul>
          <li>
            <a href="/">Asosiy </a>
          </li>
          <li>
            <a href="/course">Kurslar</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/blog">Blog </a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
            <a className="sign" href="/signup">Ro'yxatdan o'tish</a>
        </ul>
      </ul>
    </div>
  );
}
export default Navbar;