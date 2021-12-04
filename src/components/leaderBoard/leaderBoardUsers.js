import user from "../navbar/user.jpg";
const LeaderBoardUser = () => {
  return (
    <li className="border rounded-md shadow-lg p-3 mb-4 text-gray-700">
      <h2 className="text-lg text-center font-bold capitalize">user 1</h2>
      <div className="flex items-center justify-between">
        <img className="w-20 h-20 rounded-full mt-2 border" src={user} alt="" />
        <div className="capitalize font-bold">
          <p className="mb-2">
            asked polls <span className="text-purple-400">5</span>
          </p>
          <p>
            answered polls <span className="text-purple-400">2</span>
          </p>
        </div>
        <div className="text-center text-xl font-bold">
          <h3>Score</h3>
          <h3 className="text-purple-400">7</h3>
        </div>
      </div>
    </li>
  );
};

export default LeaderBoardUser;
