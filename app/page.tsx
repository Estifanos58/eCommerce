import CartDetail from "@/components/CartDetail";
import Categoies from "@/components/Categoies";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import { isObject } from "util";

export default function Home() {
  return (
    <div>
      <div>
        {/* Nav */}
        <Nav/>
        <div className="min-h-screen py-10 flex flex-col bg-gray-50 px-10 lg:px-50">
            {/* Hero */}
            <Hero/>
            {/* Categoies */}
            <div>
              <Categoies/>
            </div>
            <div>
              <Feature/>
            </div>
            <Subscribe/>
        </div>
          <Footer/>
      </div>
              <CartDetail/>
    </div>
  );
}
