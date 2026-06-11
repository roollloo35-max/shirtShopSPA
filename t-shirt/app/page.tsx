import Image from "next/image";
import Banner from "./components/banner/banner";
import Catalog from "./components/ctalog/catalog"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col w-full ">
      <main className="flex flex-col w-full">
          <Banner />
          <Catalog />
      </main>
    </div>
  );
}
