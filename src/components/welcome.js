const Welcome = () => {
  return (
    <section className="h-screen flex flex-col">
      <h1 className="my-4 capitalize text-purple-400 font-bold tracking-wide text-4xl text-center">
        would you rather?
      </h1>
      <div className="w-11/12 max-w-sm md:my-auto mt-32 mx-auto">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <select className="welcome-input" value="select user">
            <option value="user 1">user 1</option>
            <option value="user 2">user 2</option>
            <option value="user 3">user 3</option>
            <option value="select user">select user</option>
          </select>

          <button className="welcome-btn">log in</button>
        </form>
        <hr className="my-4 h-1 rounded-full bg-gray-400 opacity-40" />
        <form
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
        </form>
      </div>
    </section>
  );
};

export default Welcome;
