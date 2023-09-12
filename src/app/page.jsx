import Image from "next/image";
import Welcome from "./welcome";
import Products from "./Products";

export default function Home() {
  const products  = ['Product 1', 'Product 2', 'Product 3', 'Product 4']
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between">
      <Welcome />
      <Products />
      <section className="h-screen w-screen flex flex-col items-center justify-center p-24">
      
      </section>
    </main>
  );
}
