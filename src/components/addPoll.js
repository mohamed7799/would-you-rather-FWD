import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveQuestion, setAdded } from "../features/questionsSlice";

const AddPoll = () => {
  //variables
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  const added = useSelector((state) => state.questions.added);

  const [formData, setFormData] = useState({ optionOne: "", optionTwo: "" });

  //functions
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (added) {
      navigate("/home");
      dispatch(setAdded(false));
    }
  }, [added]);

  const addPoll = () => {
    if (formData.optionOne === "" || formData.optionTwo === "") {
      alert("enter all fields");
    } else {
      dispatch(
        saveQuestion({
          author: user.id,
          optionOneText: formData.optionOne,
          optionTwoText: formData.optionTwo,
        })
      );
    }
  };

  return (
    <section className="w-11/12 mt-6 max-w-md card">
      <h2 className="my-4 text-purple-400 text-xl capitalize font-bold">
        would you rather ?
      </h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          className="addPoll-input"
          placeholder="Option A"
          type="text"
          name="optionOne"
          value={FormData.optionOne}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <p className="text-purple-400 text-center my-2 text-xl">or</p>
        <input
          className="addPoll-input"
          placeholder="Option B"
          type="text"
          name="optionTwo"
          value={FormData.optionTwo}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <button
          onClick={addPoll}
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
