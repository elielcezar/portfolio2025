'use client';

export default function Experience() {
  return (
    <>
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
    </>
  )
}