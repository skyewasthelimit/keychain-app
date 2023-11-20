'use client';
import React from "react";

export default function Home() {

  return (
    <main className="flex min-h-40vh flex-col items-center justify-between">
      <div className="p-10 mx-auto flex w-full items-start justify-start font-mono">
        <div className="navbar-menu">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <div className="relative before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ea01ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

      </div>
      <div className="grid font-bold text-5xl bottom-0 left-0 h-40 w-full items-end justify-center">
        KeyChain - A revolution in lock systems management.
      </div>


      <div className="flex justify-start flex-col text-2xl mt-20 bottom-0 left-0 h-20 w-full items-center">
        Keychain is a versatile key tool designed for modern lock and entry systems.
      </div>

      <div className="flex flex-col justify-start items-start">
        <button className="mt-10 px-4 h-7 rounded-md bg-gray-500 text-xl bottom-0 left-0 min-w-20vh items-end justify-center hover:bg-gray-700 hover:border border-white">Read More</button>
        <button className="mt-10 px-4 h-7 border-2 border-white border-solid rounded-md text-xl bottom-0 left-0 min-w-20vh items-end justify-center hover:border">Quickstart</button>
      </div>

      <div className=" flex flex-col bg-gray-500 mt-20">
        <div className="flex font-bold text-5xl bottom-0 left-0 h-40 w-full items-end justify-end">
          <div className="p-4">
            Intuitive design
          </div>
        </div>
        <div className="flex mt-10 text-lg bottom-0 left-0 w-full items-end justify-center">
          <div className="p-4">
            We have helped protect over 200k+ homes in Canada with our innovative technology and growing.
            KeyChain was designed from the ground up to be ultra secure and easy to use with pin-lock entry points via mobile phone. No sign-up required with easy to use in-app operation and
            plenty of options to protect you and your family.
          </div>
        </div>
      </div>

      <div id="testimonial-block" className="flex text-lg w-full">
        <div id="reveal" className="testimonial-1">Solutions</div>
        <div id="reveal" className="testimonial-2">Security</div>
        <div id="reveal" className="testimonial-3">Satisfaction</div>
      </div>

      <div className="h-[10vh] before:absolute before:h-[300px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#832886] after:dark:opacity-20 before:lg:h-[360px] z-[-1]">

      </div>

      <div className="h-[100vh]">

      </div>
    </main>
  )
}
