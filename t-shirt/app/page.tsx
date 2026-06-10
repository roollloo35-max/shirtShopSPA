import Image from "next/image";
import Header from "./components/header/header";


export default function Home() {
  return (
    <div className="flex flex-1 flex-col w-full ">
      <main className="flex flex-col">
          <Header />
      </main>
    </div>
  );
}
