'use client';

export default function Education() {
  return (
    <>
      <div id="education" className="w-full py-10 px-10 sm:pb-20 xl:px-0">
          <div className="w-full lg:max-w-[1100px] lg:mx-auto text-left">
            <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6 text-left">Education</h3>
            <div className="items flex flex-col sm:flex-row gap-[16px]">
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
    </>
  )   
}
