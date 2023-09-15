import Image from "next/image";
import Welcome from "./welcome";
import Products from "./Products";
import Sales from "./Sales";

export default function Home() {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between">
      <Welcome />
      <Products />
      <Sales />
      <section className="h-fit w-screen flex flex-col items-center justify-center p-24">
        <h2 className="text-5xl m-10">Partners</h2>
        <div className="card card-compact w-fit bg-base-100 hover:shadow-xl">
          <figure>
            <Image
              src="/partners/unilever.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className=""
            />
          </figure>
          <div className="card-body">
            <h2 className="font-extrabold text-2xl text-center">Unilever</h2>
            
          </div>
        </div>
      </section>
    </main>
  );
}
