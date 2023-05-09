import Image from "next/image";




const Card = ({cat}:any) => {
  return (

        <div
          className="grid grid-cols-2 px-1 py-3 my-3 "
        >
          <div className="flex items-center">
            <Image
              width={20}
              height={20}
              alt="5"
              src={cat.icon}
              className='inline mr-2' 
            />
            <p className={`${cat.color} font-bold`}>{cat.category}</p>
          </div>
          <div className="flex justify-end text-lg">
            <span className={`font-black`}>
              {cat.score}
            </span>
              <span className="font-bold whitespace-pre text-black/50 text-base items-start"> / 100</span>
          </div>
          
        </div>
  );
};

export default Card;
