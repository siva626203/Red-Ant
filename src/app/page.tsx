import Image from "next/image";
import Header from './_components/Header'
import HomePage from "./pages/home";
export default function Home() {
  return (
    <main>
      <Header/>
      <HomePage/>
    </main>
  );
}
