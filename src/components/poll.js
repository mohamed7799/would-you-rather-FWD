import { Link } from "react-router-dom";
import UserImage from "./userImage";
import { useDispatch } from "react-redux";
import { view } from "../features/questionSlice";
const Poll = ({ user, question }) => {
  const dispatch = useDispatch();

  return (
    <li className="mb-4 font-bold text-center justify-between flex items-center gap-4 max-w-sm card">
      <div>
        <h3>{user.name} asks</h3>
        <UserImage avatar={user.avatarURL}></UserImage>
      </div>
      <div>
        <h3>would you rather ?</h3>
        <Link
          to={`/questions/${question.id}`}
          onClick={() => {
            dispatch(view(question));
          }}
        >
          <button className="text-purple-400 underline mt-2">view poll</button>
        </Link>
      </div>
    </li>
  );
};

export default Poll;
