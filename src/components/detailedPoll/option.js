const Option = ({ currentVotes, allVotes, selected, option }) => {
  return (
    <div
      className={
        selected
          ? "bg-purple-200 border-2 bg-opacity-30 p-2 border-purple-400 rounded-md"
          : ""
      }
    >
      <h2>{option}</h2>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
          <div
            style={{ width: `${(currentVotes / allVotes) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
          ></div>
        </div>
      </div>
      <p>{`${((currentVotes / allVotes) * 100).toFixed(1)}%`}</p>
      <p>
        {currentVotes} out of {allVotes} votes
      </p>
    </div>
  );
};

export default Option;
