import localFont from "next/font/local";
import Image from "next/image";
import data from "../data.json";

const hanken = localFont({ src: "../fonts/static/HankenGrotesk-Medium.ttf" });

const Card = ({cat, index}) => {
  return (

        <div
          key={index}
          className="m-3 p-3 grid grid-cols-2 border border-black/10 rounded-xl"
        >
          <div className="flex">
            <Image
              width={20}
              height={20}
              alt="5"
              src={cat.icon}
              className="inline mr-2"
            />
            <p>{cat.category}</p>
          </div>
          <div className="flex justify-end text-lg">
            <span className="font-extralight">
              {cat.score}
            </span>
              <span className="font-bold whitespace-pre"> / 100</span>
          </div>
        </div>
  );
};

export default Card;
