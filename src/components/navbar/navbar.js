import NavbarItem from "./navbarItem";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setIsNavMenuOpen, selectedTab }) => {
  //variables
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  //function
  const logoutUser = () => {
    dispatch(logout(null));
    navigate("/");
  };

  useEffect(() => console.log(user.name), []);

  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <FaBars
        onClick={() => setIsNavMenuOpen(true)}
        size="1.5rem"
        color="rgb(167, 139, 250)"
        className="sm:hidden"
      ></FaBars>
      <ul className="hidden sm:flex gap-8">
        <NavbarItem selectedTab={selectedTab}>Home</NavbarItem>
        <NavbarItem selectedTab={selectedTab}>Add</NavbarItem>
        <NavbarItem selectedTab={selectedTab}>LeaderBoard</NavbarItem>
      </ul>
      <div className="flex items-center gap-2">
        <h3 className="text-purple-400">{user.name}</h3>
        <img
          className="w-10 h-10 rounded-full mt-2 border"
          src={user.avatarURL}
          alt=""
        />
        <button onClick={logoutUser} className="text-purple-400 cursor-pointer">
          logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
