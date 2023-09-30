import Image from "next/image";

export default function Partners() {
  return(
    <section className="h-fit w-screen flex flex-col items-center justify-center p-24">
        <h2 className="text-5xl m-10">Partners</h2>
        <div className="flex flex-row card card-compact w-fit bg-base-100 ">
          <div className="hover:shadow-xl">
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
          <div className="hover:shadow-xl">
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
        </div>
      </section>
  )
}