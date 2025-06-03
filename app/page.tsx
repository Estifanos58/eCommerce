import Categoies from "@/components/Categoies";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        {/* Nav */}
        <Nav/>
        <div className="pt-10 bg-blue-50 px-20">
            {/* Hero */}
            <Hero/>

            {/* Categoies */}
            <div>
              <Categoies/>
            </div>
        </div>
      </div>
     
    </div>
  );
}
