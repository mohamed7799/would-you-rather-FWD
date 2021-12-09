import UserImage from "../userImage";
import Option from "./option";
const DetailedPoll = () => {
  return (
    <div className="text-gray-700 mb-4 shadow-lg rounded-md font-bold border py-4 px-6 text-center justify-between flex items-center gap-4 max-w-lg w-11/12 mx-auto mt-4">
      <div>
        <h2 className="text-center">user 1 asks</h2>
        <UserImage></UserImage>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <h2 className="mb-2 capitalize text-purple-400 text-xl">
          would you rather ?
        </h2>
        <div className="flex gap-2 items-center">
          <input type="radio" id="optionA" name="answer" value="option A" />
          <label htmlFor="optionA">this is option one not two</label>
        </div>

        <div className="flex gap-2 items-center">
          <input type="radio" id="optionB" name="answer" value="option B" />
          <label htmlFor="optionB">this is realy option B</label>
        </div>
        <button
          className="border rounded-md w-full bg-purple-400 text-white font-bold capitalize py-2 mt-4"
          type="submit"
        >
          submit
        </button>
      </form>

      <div className="hidden">
        <Option
          currentVotes={2}
          allVotes={3}
          selected={false}
          option="this is option one not two"
        ></Option>
        <br />
        <Option
          currentVotes={1}
          allVotes={3}
          selected={true}
          option="this is realy option B"
        ></Option>
      </div>
    </div>
  );
};

export default DetailedPoll;
