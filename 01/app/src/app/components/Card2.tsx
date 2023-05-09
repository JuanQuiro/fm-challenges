import localFont from "next/font/local";
import Image from "next/image";
import data from "../data.json";
import Content from '../components/Content2' 

const hanken = localFont({ src: "../fonts/static/HankenGrotesk-Medium.ttf" });

const Card = () => {
  return (
    <section
      className={`${hanken.className} mr-auto lg:w-72 font-extralight p-5 m-5 border border-black/20 shadow-xl rounded-3xl`}
    >
      <p className="text-purple-950 text-lg font-semibold">Summary</p>
      {data.map((cat, i) => (
        <Content cat={cat} index={i} />
      ))}
    </section>
  );
};

export default Card;
