import "./Navbar.css";
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="d-flex ">
        <a href="/" className="Logo">
          <span>LET </span>IT ACADEMY
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
        </ul>
      </ul>
    </div>
  );
}
export default Navbar;
