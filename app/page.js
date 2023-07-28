// import Image from 'next/image'
import { About, Chatbot } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-8xl bg-red-600 text-black p-6 fd">SHEHZAD</h1>
      <About />
      <Chatbot />
    </main>
  );
}
