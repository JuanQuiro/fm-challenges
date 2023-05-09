

const Card = () => {
  return (
    <section
      className={`mr-0 ml-0  sm:ml-auto sm:w-72 p-5 sm:mr-5 bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 rounded-3xl`}
    >
      <p className="text-xl text-center capitalize text-white/70">
        Your Results
      </p>
      <div className="flex items-center justify-center w-32 h-32 mx-auto my-5 rounded-full shadow-sm shadow-black/10 bg-gradient-to-t from-indigo-600 to-indigo-700">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-white">76</p>
          <p className="text-white/50">of 100</p>
        </div>
      </div>
      <div className="p-3 text-white">
        <p className="mb-2 text-3xl text-center">Great</p>
        <p className="py-2 antialiased text-center text-white/80">  You scored higher than 65% of the people who have taken these tests.</p>

      </div>
    </section>
  );
};

export default Card;
