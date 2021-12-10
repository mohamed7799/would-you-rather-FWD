import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/usersSlice";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
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
      let temp = Object.entries(users).filter(
        ([_, value]) => value.name === selectedUser
      );

      dispatch(login(temp[0][1]));
      navigate("/home");
    }
  };

  useEffect(() => dispatch(getUsers()), []);

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
              {Object.entries(users).map(([key, value]) => (
                <option value={value.name} key={value.id}>
                  {value.name}
                </option>
              ))}
            </select>

            <button onClick={loginUser} className="welcome-btn">
              log in
            </button>
          </form>
          <hr className="my-4 h-1 rounded-full bg-gray-400 opacity-40" />
          {/*<form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Enter your name"
              className="welcome-input"
              type="text"
            />
            <button className="welcome-btn text-purple-600 bg-opacity-50">
              sign up
            </button>
          </form>*/}
        </div>
      </section>
    )
  );
};

export default Welcome;
