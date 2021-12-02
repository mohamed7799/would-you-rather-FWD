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
          <select
            className="border rounded-lg p-2 border-purple-400 focus:outline-none text-purple-600 font-bold capitalize"
            value="select user"
          >
            <option value="user 1">user 1</option>
            <option value="user 2">user 2</option>
            <option value="user 3">user 3</option>
            <option value="select user">select user</option>
          </select>

          <button className="bg-purple-400 text-white py-2 rounded-lg font-bold capitalize text-base">
            log in
          </button>
        </form>
        <hr className="my-4 h-1 rounded-full bg-gray-400 opacity-40" />
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Enter your name"
            className="border rounded-lg p-2 border-purple-400 focus:outline-none text-purple-600 font-bold capitalize"
            type="text"
          />
          <button className="bg-purple-400 text-purple-600 bg-opacity-50 py-2 rounded-lg font-bold capitalize text-base">
            sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
