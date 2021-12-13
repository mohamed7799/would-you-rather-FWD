import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPoll = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <section className="w-11/12 mt-6 max-w-md card">
      <h2 className="my-4 text-purple-400 text-xl capitalize font-bold">
        would you rather ?
      </h2>
      <form action="">
        <input className="addPoll-input" placeholder="Option A" type="text" />
        <p className="text-purple-400 text-center my-2 text-xl">or</p>
        <input className="addPoll-input" placeholder="Option B" type="text" />
        <button
          className="w-full p-2 bg-purple-400 text-white font-bold rounded-md
          my-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPoll;
