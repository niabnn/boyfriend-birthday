import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Click here babe", href: "/clock" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      <nav></nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r bg-glow-orange" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={290}
      />
      <h3 className="z-10 text-4xl text-transparent duration-1000 bg-glow-orange cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Happy
      </h3>
      <h2 className="z-10 text-4xl text-transparent duration-1000 bg-glow-orange cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Birthday Brett!
      </h2>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r bg-glow-orange" />
      <ul className="flex items-center justify-center gap-4 animate-fade-in mt-3">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            <button
              className="text-sm duration-500 bg-glow-orange text-white py-2 px-2 rounded-md mt-2 border-1 border-glow-orange hover:bg-white hover:text-glow-orange font-display"
            >
              {item.name}
            </button>
          </Link>
        ))}
      </ul>
      <div className="my-10 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          This web site was created by Brett's sexy and Colombian girl, Nia.
        </h2>
        <h2 className="text-sm text-zinc-500 ">
        Postdata: I know distance is hard, but I hope this makes you feel a little closer
          to me.
        </h2>
      </div>
    </div>
  );
}
