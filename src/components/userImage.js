//import user from "../user.jpg";
const UserImage = ({ avatar }) => {
  return (
    <img
      className="w-12 h-12 rounded-full mt-2 border md:w-24 md:h-24"
      src={avatar}
      alt=""
    />
  );
};

export default UserImage;
