import { Link } from "react-router-dom";

const NavMenuItem = ({ children, setIsNavMenuOpen }) => {
  return (
    <li className="font-bold text-xl capitalize">
      <Link onClick={() => setIsNavMenuOpen(false)} to={`/${children}`}>
        {children}
      </Link>
    </li>
  );
};

export default NavMenuItem;
