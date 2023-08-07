import Image from "next/image";

export default function Welcome() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-24">
        <Image
          src="/logoSingle.png"
          width={300}
          height={300}
          alt="PT. Harnaka Cristal Sejahtra"
        />
        <h2 className="text-9xl font-extrabold font-serif text-center py-5">HCS</h2>
        <h2 className="text-4xl font-bold font-sans text-center">PT. Harnaka Cristal Sejahtra</h2>
        <h3 className="text-2xl font-bold font-sans text-center">Karena kebutuhan anda adalah prioritas kami</h3>
        <h4 className="text-xl font-semibold font-sans text-center pt-10">PT. Harnaka Cristal Sejahtra (HCS) adalah sebuah perusahaan yang bergerak di bidang fastmoving customer goods (FMCG) dan modern trading goods. PT. HCS juga dipercaya oleh PT. Industri Nabati Lestari (INL) sebagai salah satu distributor resmi perusahaan tersebut di sebagian wilayah Bali dan Sumbawa. Perkembangan PT. HCS cukup luas, dengan adanya Depo Jawa Timur (Sidoarjo), Depo Denpasar (sebagai kantor pusat), Depo Lombok (Mataram) dan Depo Sumbawa yang baru dibuka khusus menjadi distribusi Minyak Goreng INL group. </h4>
      </section>
  )
}