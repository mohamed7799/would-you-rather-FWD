import user from "../user.jpg";
const UserImage = () => {
  return (
    <img
      className="w-12 h-12 rounded-full mt-2 border md:w-24 md:h-24"
      src={user}
      alt=""
    />
  );
};

export default UserImage;
