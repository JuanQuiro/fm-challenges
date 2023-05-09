import Image from "next/image";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import localFont from "next/font/local";
// Font files can be colocated inside of `pages`
const hanken = localFont({ src: "../app/fonts/HankenGrotesk-VariableFont_wght.ttf" });

export default function Home() {
  return (
    <main className={`${hanken.className} grid items-stretch sm:items-center justify-center h-screen grid-cols-1 sm:grid-cols-2`}>
      <Card />
      <Card2 />
    </main>
  );
}
