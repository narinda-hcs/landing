import Image from "next/image";

export default function Products() {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center p-24">
      <h2 className="text-5xl font-extrabold">Product dari halaman partial</h2>
      <div className="bg-blue-500 h-full w-full mt-10 carousel carousel-center rounded-box">
       
        {products.map((product, index) => (
          <div className="carousel-item relative w-full flex flex-col justify-center items-center bg-orange-300" id={`CarosProduct${index}`}> 
            <Image
              src="/next.svg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="bg-blue-200"
            />
            <div>
              <div className="bg-slate-400 w-full flex flex-col justify-center">
                <h3 className="text-center">{product}</h3>
                <h4 className="text-center"> deskripsi {product} {products.length}</h4>
                <p>{`CarosProduct${index === 0? products.length: index-1}`}</p>
                <p>{`CarosProduct${index}`}</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          
                <a href={`#CarosProduct${index === 0? products.length-1: index-1}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#CarosProduct${index === products.length-1? 0: index+1}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
