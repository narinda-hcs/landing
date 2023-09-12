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
        <h2 className="text-5xl font-extrabold">Product</h2>
        <div className="bg-blue-500 h-full w-full mt-10 carousel carousel-center rounded-box">
          
          <div
            className="carousel-item relative w-full flex flex-col justify-center items-center bg-orange-300"
            id="CarProduct1"
          >
            <Image
              src="/next.svg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="bg-blue-200"
            />
            <div>
              <div className="bg-slate-400 w-full flex flex-col justify-center">
                <h3 className="text-center">nama produk 1</h3>
                <h4 className="text-center"> deskripsi produk 1
                  {products.map((product) => (
                    <p>{product}</p>
                  ))}
                </h4>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#CarProduct4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#CarProduct2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item relative w-full" id="CarProduct2">
            <Image
              src="/next.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div>
              <h3 className="text-center">nama produk 1</h3>
              <h4 className="text-center"> deskripsi produk 1</h4>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#CarProduct1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#CarProduct3" className="btn btn-circle">
                  ❯
                </a>
              </div>
          </div>

          <div className="carousel-item relative w-full" id="CarProduct3">
            <Image
              src="/next.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div>
              <h3>nama produk 1</h3>
              <h4> deskripsi produk 1</h4>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#CarProduct2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#CarProduct4" className="btn btn-circle">
                  ❯
                </a>
              </div>
          </div>

          <div className="carousel-item relative w-full" id="CarProduct4">
            <Image
              src="/next.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div>
              <h3>nama produk 1</h3>
              <h4> deskripsi produk 1</h4>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#CarProduct3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#CarProduct1" className="btn btn-circle">
                  ❯
                </a>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
