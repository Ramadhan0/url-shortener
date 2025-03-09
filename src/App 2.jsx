import Navbar from "./components/navbar";
import { SideBar } from "./components/sidebar";
import Main from "./components/main";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />

      <main className="flex-1 p-6">
        <Navbar />

        <Main />
      </main>
    </div>
  );
}
