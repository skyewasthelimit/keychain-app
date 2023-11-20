'use client';
import React from "react";
import YouTubePlayer from './components/YouTubePlayer';

export default function Home() {

  return (
    <main className="flex min-h-[40vh] flex-col items-center justify-between">
      <div className="pt-3 flex w-full items-start justify-start font-mono">
        <div className="navbar-menu">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <div className="relative before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ea01ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

      </div>
      <div className="grid font-bold text-4xl bottom-0 left-0 h-40 w-full items-end justify-center">
        KeyChain - A revolution in lock systems management.
      </div>


      <div className="flex justify-start flex-col text-2xl mt-20 bottom-0 left-0 h-20 w-full items-center">
        Keychain is a versatile key tool designed for modern lock and entry systems.
      </div>

      <div className="flex flex-col justify-between gap-2 items-start p-4">
        <button className="py-2 px-4 rounded-md bg-gray-500 text-xl bottom-0 left-0 min-w-20vh items-end justify-center hover:bg-gray-700 hover:border border-white">Read More</button>
        <button className="py-2 px-4 border-2 border-white border-solid rounded-md text-xl bottom-0 left-0 min-w-20vh items-end justify-center hover:border">Quickstart</button>
      </div>

      <div className="pb-4 mb-3 flex flex-col bg-gray-500 mt-10">
        <div className="flex font-bold text-5xl bottom-0 left-0 h-39 w-full items-end">
          <div className="p-4">
            Intuitive design
          </div>
        </div>

        <div className="h-[2vh] before:h-[300px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[440px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#dd0ee4] after:dark:opacity-20 before:lg:h-[160px] z-[-1]">

        </div>

        <div className="flex mt-10 text-lg bottom-0 left-0 w-full items-end justify-center">
          <div className="p-4">
            We have helped protect over 200k+ homes in Canada with our innovative technology and growing.
            KeyChain was designed from the ground up to be ultra secure and easy to use with pin-lock entry points via mobile phone. No sign-up required with easy to use in-app operation and
            plenty of options to protect you and your family.
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#BBE3F2] via-[#90C1E2] via-[#5C7CA7] via-[#3C3E64] to-[#6E739A] w-[400px] h-[400px] mt-3 text-black">
        <div className="bg-gradient-to-r from-[#eef9fd] via-[#bababb] to-[#fafbfd] w-[400px] h-[400px] m-5 text-black">
          <p className="m-6 text-2xl tracking-widest pt-4 pl-1">"Since I started using KeyChain my home has never felt safer! If I lose my key I can easily contact a service agent directly from the pad. KeyChain agents work 24 hours per day to ensure customer safety and care"</p>
          <p className="pl-14"> - John Plentyburg, Customer</p>
        </div>
      </div>

      <div id="testimonial-block" className="gap-3 text-lg">
        <div id="reveal" className="testimonial-1 m-1 flex justify-center items-center">Solutions.</div>
        <div id="reveal" className="testimonial-2 m-1 flex justify-center items-center">Security.</div>
        <div id="reveal" className="testimonial-3 m-1 flex justify-center items-center">Satisfaction.</div>
      </div>

      <div className="h-[2vh] before:absolute before:h-[300px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#832886] after:dark:opacity-20 before:lg:h-[360px] z-[-1]">

      </div>
      <YouTubePlayer videoId="vHq1ncfGqAk" />

      <div className="h-[100vh]">

      </div>
    </main>
  )
}

// https://www.youtube.com/watch?v=vHq1ncfGqAk