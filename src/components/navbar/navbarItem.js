const NavbarItem = ({ children }) => {
  return (
    <li className="cursor-pointer text-purple-400 font-bold px-4 py-2 text-lg hover:text-white hover:bg-purple-500 rounded transition-all">
      {children}
    </li>
  );
};

export default NavbarItem;
