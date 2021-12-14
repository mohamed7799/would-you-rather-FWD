import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { view } from "../../features/questionSlice";
import { answereQuestion } from "../../features/questionsSlice";
import UserImage from "../userImage";
import Option from "./option";
const DetailedPoll = () => {
  //variables
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.value);
  const question = useSelector((state) => state.question.value);
  const users = useSelector((state) => state.users.value);
  const user = useSelector((state) => state.user.value);
  const [selectedAnswer, setSelectedAnswer] = useState(true);
  const [selectedUser, setSelectedUser] = useState(true);

  //functions
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setSelectedUser(users.find((user) => user.id === question.author));
    }
  }, []);

  useEffect(() => {
    if (questions) {
      dispatch(view(questions.find((q) => q.id === question.id)));
    }
  }, [questions]);

  return (
    user && (
      <div className="text-gray-700 mb-4 shadow-lg rounded-md font-bold border py-4 px-6 text-center justify-between flex items-center gap-4 max-w-lg w-11/12 mx-auto mt-4">
        <div>
          <h2 className="text-center">{selectedUser.name} asks</h2>
          <UserImage avatar={selectedUser.avatarURL}></UserImage>
        </div>

        <form
          className={
            question.optionOne.votes.includes(user.id) ||
            question.optionTwo.votes.includes(user.id)
              ? "hidden"
              : "block"
          }
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="mb-2 capitalize text-purple-400 text-xl">
            would you rather ?
          </h2>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="optionA"
              name="answer"
              value="optionOne"
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            />
            <label htmlFor="optionA">{question.optionOne.text}</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="optionB"
              name="answer"
              value="optionTwo"
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            />
            <label htmlFor="optionB">{question.optionTwo.text}</label>
          </div>
          <button
            onClick={() => {
              dispatch(
                answereQuestion({
                  authedUser: user.id,
                  qid: question.id,
                  answer: selectedAnswer,
                })
              );
            }}
            className="border rounded-md w-full bg-purple-400 text-white font-bold capitalize py-2 mt-4"
            type="submit"
          >
            submit
          </button>
        </form>

        <div
          className={
            question.optionOne.votes.includes(user.id) ||
            question.optionTwo.votes.includes(user.id)
              ? "block"
              : "hidden"
          }
        >
          <Option
            currentVotes={question.optionOne.votes.length}
            allVotes={
              question.optionOne.votes.length + question.optionTwo.votes.length
            }
            selected={question.optionOne.votes.includes(user.id) ? true : false}
            option={question.optionOne.text}
          ></Option>
          <br />
          <Option
            currentVotes={question.optionTwo.votes.length}
            allVotes={
              question.optionOne.votes.length + question.optionTwo.votes.length
            }
            selected={question.optionTwo.votes.includes(user.id) ? true : false}
            option={question.optionTwo.text}
          ></Option>
        </div>
      </div>
    )
  );
};

export default DetailedPoll;
