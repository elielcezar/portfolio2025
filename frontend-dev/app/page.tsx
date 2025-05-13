import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-neutral-800 pt-20">
        <div className="w-full lg:max-w-[1100px] lg:mx-auto min-h-[350px] flex items-start justify-start my-0">
          <div className="w-1/3 relative">
            <Image src="/photo.jpg" className="absolute border-12 border-white max-w-[330px] max-h-[450px] shadow-lg shadow-neutral-800/20" alt="Eliel Cezar" width={330} height={450} layout="responsive" />
          </div>
          <div className="w-2/3 flex gap-[16px] flex-col p-9">            
              <h1 className="text-amber-200 text-6xl font-bold">Lorem ispum</h1>
              <h2 className="text-white text-2xl font-bold">Chief Product Officer at Porto Themes</h2>
              <p className="text-white text-md text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>            
          </div>
        </div> 
        <div className="flex gap-[16px] bg-white my-0 border-b-1 border-neutral-300">
          <div className="w-full lg:max-w-[1100px] lg:mx-auto flex items-center justify-between">
            <div className="w-1/3">
              
            </div>
            <div className="w-2/3 flex gap-[16px]">
              <button className="text-neutral-800 text-md  py-6 px-12 w-3xl">Portfolio</button>
              <button className="text-neutral-800 text-md  py-6 px-12 w-3xl">About</button>
              <button className="text-neutral-800 text-md  py-6 px-12 w-3xl">Contact</button>
            </div>
          </div>
        </div>        
      </header>        

      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        
        <div id="about" className="w-full py-10 border-1 border-neutral-800">          
          <div className="w-full lg:max-w-[1100px] lg:mx-auto flex items-start justify-start border-1 border-red-500">
            <div className="w-1/2 text-left">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase">About me</h3>
              <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <button className="text-neutral-800 text-md py-3 px-6 my-6 m-auto border-1 border-neutral-800">Download CV</button>
            </div>
            <div className="w-1/2">
              <div id="personal-info" className="flex flex-col gap-[16px] p-6 shadow-lg shadow-neutral-800/20">
                <h4 className="text-neutral-800 text-md font-bold uppercase">Personal Details</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>             
            </div>
          </div>
        </div>

        <div id="experience" className="bg-gray-100 w-full py-10 my-0">
          <div className="w-full lg:max-w-[1100px] lg:mx-auto">
            <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6">Experience</h3>
            <div className="items">
              
              <div className="experience-item flex shadow-lg shadow-neutral-600/10">
                <div className="w-1/4 bg-amber-300 p-6">
                  <h4 className="text-neutral-800 text-md font-bold uppercase">Company Name</h4>
                  <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="w-3/4 p-6 bg-white">
                  <h4 className="text-neutral-800 text-md font-bold">Job Title</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div id="education" className="w-full">
          <div className="w-full lg:max-w-[1100px] lg:mx-auto text-left">
            <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6 text-left">Education</h3>
            <div className="items flex gap-[16px]">
              <div className="item shadow-lg shadow-neutral-600/10 p-6">
                <h4 className="text-neutral-800 text-md font-bold">Uninter</h4>
                <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
              <div className="item shadow-lg shadow-neutral-600/10 p-6">
                <h4 className="text-neutral-800 text-md font-bold">UTFPR</h4>
                <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="skill" className="w-full py-10 border-1 border-neutral-800">          
          <div className="w-full lg:max-w-[1100px] lg:mx-auto flex items-start justify-start border-1 border-red-500">
            <div className="w-1/2 text-left">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase">Skills</h3>
              <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <button className="text-neutral-800 text-md py-3 px-6 my-6 m-auto border-1 border-neutral-800">Download CV</button>
            </div>
            <div className="w-1/2">
              <div id="personal-info" className="flex flex-col gap-[16px] p-6 shadow-lg shadow-neutral-800/20">
                <h4 className="text-neutral-800 text-md font-bold uppercase">Languages</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>             
            </div>
          </div>
        </div>

        <div id="portfolio" className="bg-gray-100 w-full py-10 my-0">
          <div className="w-full lg:max-w-[1100px] lg:mx-auto">
            <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6">Portfolio</h3>
            <div className="items">
              
              <div className="experience-item flex shadow-lg shadow-neutral-600/10">
                <div className="w-1/4 p-6">
                  <h4 className="text-neutral-800 text-md font-bold uppercase">Company Name</h4>
                  <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="w-3/4 p-6 bg-white">
                  <h4 className="text-neutral-800 text-md font-bold">Job Title</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div id="contact" className="w-full py-10 my-0 flex">          
          <div className="flex-1/2 bg-amber-300 flex items-center justify-end">
            <div className="w-[calc(1100px/2)] p-6 border-1 border-red-500">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6">Say Hello</h3>
              <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <button className="text-neutral-800 text-md py-3 px-6 my-6 m-auto border-1 border-neutral-800">Download CV</button>
            </div>            
          </div>
          <div className="flex-1/2 bg-gray-900">
            <div className="w-[calc(1100px/2)] p-6 border-1 border-red-500">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6 text-white">Contact</h3>
              <p className="text-neutral-800 text-md text-neutral-600 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
          </div>
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </>
  );
}
