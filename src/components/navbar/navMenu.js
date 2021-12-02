import { GrClose } from "react-icons/gr";
import NavMenuItem from "./navMenuItem";

const NavMenu = ({ setIsNavMenuOpen }) => {
  return (
    <div className="bg-purple-400 absolute top-0 left-0 right-0 bottom-0 p-4">
      <GrClose
        onClick={() => setIsNavMenuOpen(false)}
        className="ml-auto"
        size="2rem"
        color="white"
      ></GrClose>
      <ul className="flex flex-col gap-8 mt-16">
        <NavMenuItem></NavMenuItem>
        <NavMenuItem></NavMenuItem>
        <NavMenuItem></NavMenuItem>
      </ul>
    </div>
  );
};

export default NavMenu;
