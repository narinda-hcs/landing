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
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
            
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
