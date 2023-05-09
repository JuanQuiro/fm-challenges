import Image from "next/image";
import Card from "./components/Card";
import Card2 from "./components/Card2";

export default function Home() {
  return (
    <main className="grid grid-cols-2 justify-center items-center h-screen">
      <Card />
      <Card2 />
    </main>
  );
}
