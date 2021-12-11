import LeaderBoardUser from "./leaderBoardUsers";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeaderBoard = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.value);
  const users = useSelector((state) => state.users.value);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <section className="w-11/12 max-w-lg mt-6 mx-auto">
      <h1 className="text-center text-purple-400 text-xl font-bold">
        LeaderBoard
      </h1>
      <ul className="mt-4">
        {users
          .slice()
          .sort((a, b) => {
            let A_score = a.questions.length + Object.keys(a.answers).length;
            let B_score = b.questions.length + Object.keys(b.answers).length;

            return B_score - A_score;
          })
          .map((user) => (
            <LeaderBoardUser user={user}></LeaderBoardUser>
          ))}
      </ul>
    </section>
  );
};

export default LeaderBoard;
