
import data from "../data.json";
import Content from '../components/Content2' 

import localFont from "next/font/local";
// Font files can be colocated inside of `pages`
const hanken = localFont({ src: "../fonts/static/HankenGrotesk-Bold.ttf" });

const Card = () => {
  return (
    <section
      className={`mr-0 sm:mr-auto sm:w-72 font-extralight p-5 sm:border-black/25  border-2 border-black/50 shadow-black/40 shadow-lg rounded-t-3xl sm:rounded-3xl`}
    >
      <p className={`${hanken.className} text-lg font-semibold text-purple-950`}>Summary</p>
      {data.map((cat, i) => (
        <Content key={i} cat={cat} index={i} />
      ))}
      <button className="flex justify-center w-full p-2 text-lg font-normal text-center text-white transition duration-700 bg-gray-800 hover:bg-purple-950 rounded-3xl">
            Continue
          </button>
    </section>
  );
};

export default Card;
