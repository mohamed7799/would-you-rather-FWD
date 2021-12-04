import LeaderBoardUser from "./leaderBoardUsers";

const LeaderBoard = () => {
  return (
    <section className="w-11/12 max-w-lg mt-6 mx-auto">
      <h1 className="text-center text-purple-400 text-xl font-bold">
        LeaderBoard
      </h1>
      <ul className="mt-4">
        <LeaderBoardUser></LeaderBoardUser>
        <LeaderBoardUser></LeaderBoardUser>
        <LeaderBoardUser></LeaderBoardUser>
        <LeaderBoardUser></LeaderBoardUser>
      </ul>
    </section>
  );
};

export default LeaderBoard;
