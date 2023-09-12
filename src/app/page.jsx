
import Welcome from "./welcome";
import Products from "./Products";
import Sales from "./Sales";

export default function Home() {
  const products  = ['Product 1', 'Product 2', 'Product 3', 'Product 4']
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between">
      <Welcome />
      <Products />
      <Sales />
      <section className="min-h-screen flex flex-col items-center justify-center px-24">
        
      </section>
    </main>
  );
}
