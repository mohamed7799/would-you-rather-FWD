import { useState } from "react";
import Poll from "./poll";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("answered polls");

  return (
    <section>
      <div className="w-11/12 max-w-lg mt-6 mx-auto">
        <div className="flex flex-col gap-2 justify-between sm:flex-row w-4/5 mx-auto">
          <button
            onClick={() => setSelectedFilter("answered polls")}
            className={`font-bold capitalize text-gray-500 ${
              selectedFilter === "answered polls"
                ? "text-purple-400 underline"
                : ""
            }`}
          >
            answered polls
          </button>
          <button
            onClick={() => setSelectedFilter("unanswered polls")}
            className={`font-bold capitalize text-gray-500 ${
              selectedFilter === "unanswered polls"
                ? "text-purple-400 underline"
                : ""
            }`}
          >
            unanswered polls
          </button>
        </div>
        <ul className="mt-6">
          <Poll></Poll>
          <Poll></Poll>
          <Poll></Poll>
          <Poll></Poll>
        </ul>
      </div>
    </section>
  );
};

export default Home;
