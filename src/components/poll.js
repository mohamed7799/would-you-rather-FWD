import UserImage from "./userImage";
const Poll = ({ user }) => {
  return (
    <li className="mb-4 font-bold text-center justify-between flex items-center gap-4 max-w-sm card">
      <div>
        <h3>{user.name} asks</h3>
        <UserImage avatar={user.avatarURL}></UserImage>
      </div>
      <div>
        <h3>would you rather ?</h3>
        <button className="text-purple-400 underline mt-2">view poll</button>
      </div>
    </li>
  );
};

export default Poll;
