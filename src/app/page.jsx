import Image from "next/image";
import Welcome from "./welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Welcome />
      <section className="min-h-screen flex flex-col items-center justify-center px-24">
        
      </section>
    </main>
  );
}
