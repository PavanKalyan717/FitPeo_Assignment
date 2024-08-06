'use client'
import DashBoard from "@/components/DashBoard";
import NavBar from "@/components/NavBar";
import NewDashBoard from "@/components/NewDashBoard";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  // const trigger = useRef<HTMLDivElement>(null);

  return (
    <>

      <div className=' fixed top-0 w-full z-10  border-b-[1px] border-white md:border-0 '>
        <NavBar />
      </div>
      {/* <div ref={trigger} className=" hidden absolute h-96 w-20 right-0 bg-inherit rounded-lg ">
      </div> */}

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
