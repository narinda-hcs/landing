import Image from "next/image";

export default function Sales() {
  const Team = ["Sales 1", "Sales 2", "Sales 3", "Sales 4"];
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center p-24">
    <h2 className="text-5xl font-extrabold">Sales</h2>
      <div className="bg-blue-500 h-full w-full mt-10 carousel carousel-center rounded-box">
       
        {Team.map((sales, index) => (
          <div key={sales} className="carousel-item relative w-full flex flex-row justify-center items-center bg-orange-300" id={`Carossales${index}`}> 
            <Image
              src="/next.svg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="bg-blue-200 w-2/5 ml-16"
            />
            <div className="w-3/5 mr-16">
              <div className="bg-slate-400 w-full flex flex-col justify-center">
                <h3 className="text-center">{sales}</h3>
                <h4 className="text-center"> deskripsi {sales} {Team.length}</h4>
                <p>{`Carossales${index === 0? Team.length: index-1}`}</p>
                <p>{`Carossales${index}`}</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          
                <a href={`#Carossales${index === 0? Team.length-1: index-1}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#Carossales${index === Team.length-1? 0: index+1}`} className="btn btn-circle">
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
