import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/usersSlice";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../features/questionsSlice";

const Welcome = () => {
  //variables
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.value);
  const [selectedUser, setSelectedUser] = useState("select user");

  //functions
  const loginUser = () => {
    if (selectedUser === "select user") {
      alert("please select a user");
    } else {
      dispatch(login(users.filter((user) => user.name === selectedUser)[0]));
      if (window.history.state.idx === 0) {
        navigate("/home");
      } else {
        navigate(-1);
      }
    }
  };

  useEffect(() => {
    dispatch(getUsers()).then(() => dispatch(getQuestions()));
  }, []);

  return (
    users && (
      <section className="h-screen flex flex-col">
        <h1 className="my-4 capitalize text-purple-400 font-bold tracking-wide text-4xl text-center">
          would you rather?
        </h1>
        <div className="w-11/12 max-w-sm md:my-auto mt-32 mx-auto">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <select
              className="welcome-input"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="select user">select user</option>
              {users.map((user) => (
                <option value={user.name} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>

            <button onClick={loginUser} className="welcome-btn">
              log in
            </button>
          </form>
        </div>
      </section>
    )
  );
};

export default Welcome;
