import DashBoard from "@/components/DashBoard";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex">
        <div className="w-[4%]">
          <SideBar />
        </div>
        <div className="w-[96%]">
          <DashBoard />
        </div>
      </div>
    </div>
  );
}
