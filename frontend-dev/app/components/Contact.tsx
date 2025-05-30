'use client';

export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full my-0 flex flex-col sm:flex-row ">          
          <div className="w-full sm:w-1/2 bg-amber-300 flex items-center py-10 sm:py-50 sm:justify-end pl-10 xl:pl-0">
            <div className="w-[calc(1100px/2)] p-10 pl-0 border-1 border-red-500">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6">Say Hello</h3>
              <p className="text-neutral-800 text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <button className="text-neutral-800 text-md py-3 px-6 my-6 m-auto border-1 border-neutral-800">Download CV</button>
            </div>            
          </div>
          <div className="w-full sm:w-1/2 bg-gray-900 flex justify-start py-10 sm:py-50 pr-10 xl:pr-0">
            <div className="w-[calc(1100px/2)] p-10 border-1 border-red-500">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6 text-white">Contact</h3>
              <p className="text-neutral-800 text-md text-neutral-600 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
          </div>
        </div>
    </>
  )   
}
