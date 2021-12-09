import { Link } from "react-router-dom";

const NavbarItem = ({ children, selectedTab }) => {
  return (
    <Link to={`/${children}`}>
      <li
        className={`cursor-pointer  font-bold px-4 py-2 text-lg hover:text-white hover:bg-purple-500 rounded transition-all ${
          children === selectedTab
            ? "text-white bg-purple-500 rounded"
            : "text-purple-400"
        }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default NavbarItem;
