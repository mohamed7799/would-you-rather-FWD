import user from "./navbar/user.jpg";
const Poll = () => {
  return (
    <li className="mb-4 shadow-lg rounded-md font-bold border py-2 px-6 text-center justify-between flex items-center gap-4 max-w-sm mx-auto">
      <div>
        <h3>User 1 asks</h3>
        <img
          className="w-24 h-24 rounded-full mt-2 border bor"
          src={user}
          alt=""
        />
      </div>
      <div>
        <h3>would you rather ?</h3>
        <button className="text-purple-400 underline mt-2">view poll</button>
      </div>
    </li>
  );
};

export default Poll;
