'use client';

export default function Skills() {
  return (
    <>
      <div id="skill" className="w-full py-10 border-1 border-neutral-800">          
          <div className="w-full lg:max-w-[1100px] lg:mx-auto flex flex-col sm:flex-row items-start justify-start border-1 border-red-500">
            <div className="w-full sm:w-1/2 text-left">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase">Skills</h3>
              <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <button className="text-neutral-800 text-md py-3 px-6 my-6 m-auto border-1 border-neutral-800">Download CV</button>
            </div>
            <div className="w-full sm:w-1/2">
              <div id="personal-info" className="flex flex-col gap-[16px] p-6 shadow-lg shadow-neutral-800/20">
                <h4 className="text-neutral-800 text-md font-bold uppercase">Languages</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>             
            </div>
          </div>
        </div>
    </>
  )   
}
