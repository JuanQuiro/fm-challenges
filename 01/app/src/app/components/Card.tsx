import localFont from "next/font/local";
// Font files can be colocated inside of `pages`
const hanken = localFont({ src: "../fonts/static/HankenGrotesk-Medium.ttf" });

const Card = () => {
  return (
    <section
      className={`${hanken.className} ml-auto w-72 font-extralight p-5 m-5 bg-purple-800 rounded-3xl`}
    >
      <p className="capitalize text-white/70 text-center text-xl">
        Your Results
      </p>
      <div className="flex items-center mx-auto my-5 h-32 w-32 justify-center rounded-full bg-purple-950">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-white">76</p>
          <p className="text-white/50">of 100</p>
        </div>
      </div>
      <div className="text-white p-3">
        <p className="text-center mb-2 text-xl">Great</p>
        <p>  You scored higher than 65% of the people who have taken these tests.</p>

      </div>
    </section>
  );
};

export default Card;
