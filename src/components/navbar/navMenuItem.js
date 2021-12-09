import { Link } from "react-router-dom";

const NavMenuItem = ({ children, setIsNavMenuOpen }) => {
  return (
    <Link onClick={() => setIsNavMenuOpen(false)} to={`/${children}`}>
      <li className="font-bold text-xl capitalize">{children}</li>
    </Link>
  );
};

export default NavMenuItem;
