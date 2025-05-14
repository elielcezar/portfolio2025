'use client';
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-neutral-800 pt-20">
        <div className="w-full lg:max-w-[1100px] lg:mx-auto min-h-[350px] flex items-start justify-start my-0 flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 relative flex justify-center">
            <Image src="/photo.jpg" className="sm:absolute border-12 border-white max-w-[330px] max-h-[450px] shadow-lg shadow-neutral-800/20" alt="Eliel Cezar" width={330} height={450} layout="responsive" />
          </div>
          <div className="w-full sm:w-2/3 flex gap-[16px] flex-col p-9">            
              <h1 className="text-amber-200 text-6xl font-bold">Lorem ispum</h1>
              <h2 className="text-white text-2xl font-bold">Chief Product Officer at Porto Themes</h2>
              <p className="text-white text-md text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>            
          </div>
        </div> 
        <div className="flex gap-[16px] bg-white my-0 border-b-1 border-neutral-300">
          <div className="w-full sm:max-w-[1100px] sm:mx-auto flex items-center justify-between">
            <div className="w-1/3 hidden sm:block">
              
            </div>
            <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-[16px]">
              <button className="text-neutral-800 text-md  py-6 px-12 w-full sm:w-3xl">Portfolio</button>
              <button className="text-neutral-800 text-md  py-6 px-12 w-full sm:w-3xl">About</button>
              <button className="text-neutral-800 text-md  py-6 px-12 w-full sm:w-3xl">Contact</button>
            </div>
          </div>
        </div>        
      </header>   
    </>
  )
}
