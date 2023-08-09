import Navbar from "../components/Navbar/Navbar";
import HomeButtons from "../components/HomeButtons/HomeButtons";
import Credits from "../components/Credits/Credits";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-between">
      <Navbar />
      <HomeButtons />
      <Credits />
    </main>
  );
}
