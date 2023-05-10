import { Montserrat, Fraunces } from 'next/font/google'
import Image from 'next/image'
const font1 = Montserrat({ subsets: ['latin'] });
const font2 = Fraunces({ subsets: ['latin'] });


export default function Home() {
  return (
  <main className={`flex items-center justify-center w-screen h-screen ${font1.className}`}>

      <div className="bg-white shadow-2xl shadow-black/50 border-2 border-black/20  rounded-md overflow-hidden w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/4">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
             <picture>
        <source media="(max-width: 430px)" srcSet="img2.jpg" />
        <img src="img1.jpg" alt="Imagen" className='object-cover h-full' />
      </picture>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <span className={`text-gray-500/50 tracking-[.4em] mb-5 text-sm uppercase font-bold  sm:mt-0`}>Perfume</span>
            <h3 className={`text-gray-900 text-3xl mt-4  mb-2 sm:mb-4 font-bold ${font2.className}`}>  Gabrielle Essence Eau De Parfum
            </h3>
            <p className="text-gray-500 text-base mt-20 mb-2 sm:mb-8 ">  A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.</p>
            <div className="flex flex-row justify-between py-4 px-2 items-center mb-4">
              <span className={`text-green-900 text-4xl font-black ${font2.className}`}>$149.99</span>
              <span className="text-gray-400 text-sm line-through">$169.99</span>
            </div>
            <button className="flex w-full justify-center bg-green-800 hover:bg-green-950 text-white text-base font-normal py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"> <img src="/icon-cart.svg" alt="Cart image" className='flex items-center w-5 justify-center mx-2' />Add to Cart</button>
          </div>
        </div>
      </div>

    </main>
  )
}
