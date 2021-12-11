import UserImage from "../userImage";
const LeaderBoardUser = ({ user }) => {
  return (
    <li className="card mb-4 text-gray-700">
      <h2 className="text-lg text-center font-bold capitalize">{user.name}</h2>
      <div className="flex items-center justify-between">
        <UserImage avatar={user.avatarURL}></UserImage>
        <div className="capitalize font-bold">
          <p className="mb-2">
            asked polls{" "}
            <span className="text-purple-400">{user.questions.length}</span>
          </p>
          <p>
            answered polls{" "}
            <span className="text-purple-400">
              {Object.keys(user.answers).length}
            </span>
          </p>
        </div>
        <div className="text-center text-xl font-bold">
          <h3>Score</h3>
          <h3 className="text-purple-400">
            {user.questions.length + Object.keys(user.answers).length}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default LeaderBoardUser;
