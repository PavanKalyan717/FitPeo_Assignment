'use client'
import DashBoard from "@/components/DashBoard";
import NavBar from "@/components/NavBar";
import NewDashBoard from "@/components/NewDashBoard";
import RadialChart from "@/components/RadialChart";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {


  return (
    <>

      <div className=' fixed top-0 w-full z-10  border-b-[1px] border-white md:border-0 '>
        <NavBar />
      </div>

      <div className="flex overflow-hidden pt-[72px]  ">
        <div className=" w-[0%] md:w-[4%] ">
          <SideBar />
        </div>
        <div className="w-[100%] md:w-[96%] ">
          <NewDashBoard />
        </div>
      </div>

    </>

  );
}
