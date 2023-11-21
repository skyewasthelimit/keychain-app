'use client';
import React from "react";
import YouTubePlayer from './components/YouTubePlayer';
import FlipPanel from './components/FlipPanel';

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
          <div className="p-1">
            Intuitive design
            <img className="relative -mt-14 -m-10" style={{width: '150px', height: '150px'}} src="/images/keyicon.png" alt="KeyChain Logo" />
          </div>
        </div>

        <div className="h-[2vh] before:h-[300px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[440px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#dd0ee4] after:dark:opacity-20 before:lg:h-[160px] z-[-1]">

        </div>

        <div className="flex mt-1 text-lg bottom-0 left-0 w-full items-end justify-center">
          <div className="p-4">
            We have helped protect over 200k+ homes in Canada with our innovative technology and growing.
            &nbsp;<strong>KeyChain</strong> was designed from the ground up to be ultra secure and easy to use with pin-lock entry points via mobile phone. No sign-up required with easy to use in-app operation and
            plenty of options to protect you and your family.
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#BBE3F2] via-[#90C1E2] via-[#5C7CA7] via-[#3C3E64] to-[#6E739A] w-[400px] h-[400px] mt-3 text-black">
        <div className="bg-gradient-to-r from-[#eef9fd] via-[#bababb] to-[#fafbfd] w-[400px] h-[400px] m-5 text-black">
          <p className="m-6 text-2xl tracking-widest pt-4 pl-1">"Since I started using <strong>KeyChain</strong> my home has never felt safer! If I lose my key I can easily contact a service agent directly from the pad. <strong>KeyChain</strong> agents work 24 hours per day to ensure customer safety and care"</p>
          <p className="pl-14"> - John Plentyburg, <span className="text-sky-700">Customer</span></p>
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

      <div className="flex flex-row gap-6 m-20">
        <div className="overflow-y-scroll h-[30vh] w-[30vw] bg-gray-500 hover:bg-gradient-to-t from-slate-800 to-slate-400">
          <p className="text-center font-bold text-[3vh]">Basic Plan</p>
          <ul className="m-2 text-left font-bold text-[1.8vh]">
            <li>✔ Two Lock systems</li>
            <li>✔ Free Installation</li>
            <li>✔ 24/7 Customer Service</li>
            <li>✔ 3 Year Warranty Plan</li>
            <li>✗ Unlimited Pin Changes</li>
            <li>✗ Security Car Auto-Dispatch</li>
            <li>✗ Bonus Car KeyChain Pad</li>
            <li>✗ Securi-Cam™ Model</li>
            <li>✗ Break-In Coverage</li>
          </ul>
          <p className="mb-2 text-center font-bold text-[3vh]">$289.99 / year</p>
        </div>
        <div className="overflow-y-scroll h-[30vh] w-[30vw] bg-gray-500 hover:bg-gradient-to-t from-slate-800 to-slate-400">
          <p className="text-center font-bold text-[3vh]">Premium Plan</p>
          <ul className="m-2 text-left font-bold text-[1.8vh]">
            <li>✔ Three Lock systems</li>
            <li>✔ Free Installation</li>
            <li>✔ 24/7 Customer Service</li>
            <li>✔ 3 Year Warranty Plan</li>
            <li>✔ Unlimited Pin Changes</li>
            <li>✔ Security Car Auto-Dispatch</li>
            <li>✗ Bonus Car KeyChain Pad</li>
            <li>✗ Securi-Cam™ Model</li>
            <li>✗ Break-In Coverage</li>
          </ul>
          <p className="mb-2 text-center font-bold text-[3vh]">$379.99 / year</p>
        </div>
        <div className="overflow-y-scroll h-[30vh] w-[30vw] bg-gray-500 hover:bg-gradient-to-t from-slate-800 to-slate-400">
          <p className="text-center font-bold text-[3vh]">Platinum Plan</p>
          <ul className="m-2 text-left font-bold text-[1.8vh]">
            <li>✔ Four Lock systems</li>
            <li>✔ Free Installation</li>
            <li>✔ 24/7 Customer Service</li>
            <li>✔ 3 Year Warranty Plan</li>
            <li>✔ Unlimited Pin Changes</li>
            <li>✔ Security Car Auto-Dispatch</li>
            <li>✔ Bonus Car KeyChain Pad</li>
            <li>✔ Securi-Cam™ Model</li>
            <li>✔ Break-In Coverage</li>
          </ul>
          <p className="mb-2 text-center font-bold text-[3vh]">$469.99 / year</p>
        </div>
      </div>

      <button className="py-2 px-4 rounded-md bg-gray-500 text-xl bottom-0 left-0 min-w-20vh items-end justify-center hover:bg-gray-700 hover:border border-white">Choose Your Plan</button>

      <div className="mt-8 min-h-[40vh] min-w-[40vw] bg-slate-300 p-8 font-semibold text-slate-500 text-2xl">
        Unlock & lock your home from anywhere!
        <p className="text-lg mt-4">State of the art sophisticated smartlocks with modern features.</p>
        <button className="flex mt-5 py-2 px-4 rounded-md bg-gray-500 text-xl text-white items-center justify-center hover:bg-gray-700">Read More</button>
        <div className="mt-2 min-h-[40vh] min-w-[40vw]">
          <a href="" target="_blank"><img className="relative mt-20" style={{ objectFit: 'cover', width: '70vw', height: '46vh' }} src="/images/keychainimage-1.png" alt="KeyChain Picture" /></a>
        </div>
      </div>

      <div className="m-auto before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#1b405f] after:dark:opacity-40 before:lg:h-[260px] z-[-1]">

      </div>

      <p className="mt-10 font-bold text-3xl">Compatibility</p>
      <div className="mt-1 mb-10 h-[50vh] w-[80vw] bg-gray-400 rounded-2xl">
      <a href="" target="_blank"><img className="flex flex-col m-auto mt-8 p-5 items-center justify-center" style={{ objectFit: 'cover', height: '40vh' }} src="/images/appstore.png" alt="Appstore Picture" /></a>
      </div>


      <div className="flex flex-col justify-center items-center mb-6 w-[50vw] bg-[#02020e] rounded-2xl">
        <input className="m-auto text-center mt-6 flex justify-center items-center" placeholder="Join the mailing list"></input>
        <button className="p-1 m-2 rounded-md flex items-center justify-center text-center bg-sky-700">Submit</button>
      </div>

      <div className="w-[100vw] h-40 bg-gradient-to-b from-[#030e25] to-[#14254b] font-sans text-[#AABDFC]">
        <p className="mx-3 p-1">
          <a href="https://www.instagram.com/skyewasthelimit" target="_blank"><img className="absolute ml-[90vw] right-4 mt-4" style={{ width: '30px', height: '30px' }} src="/images/instagramlogo.png" alt="Instagram Logo" /></a>
          <a href="https://twitter.com/skyewasthelimit" target="_blank"><img className="absolute ml-[90vw] right-14 mt-4" style={{ width: '30px', height: '30px' }} src="/images/twitterlogo.png" alt="Twitter Logo" /></a>
          <a href="https://www.linkedin.com/in/skye-mclean-a43982295" target="_blank"><img className="absolute ml-[90vw] right-24 mt-4" style={{ width: '30px', height: '30px' }} src="/images/linkedinlogo.png" alt="LinkedIn Logo" /></a>
          KeyChain <br />
          Smartlock Systems Management & Security <br />
          Contact us: <a className="hover:text-[#C2A0E0]" href="">keychain@gmail.com</a>
        </p>
      </div>
    </main>

  )
}