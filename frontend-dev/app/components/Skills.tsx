'use client';

export default function Skills() {
  return (
    <>
      <div id="skills" className="w-full py-10 sm:pt-20 sm:pb-10 px-10 xl:px-0">          
          <div className="w-full lg:max-w-[1100px] lg:mx-auto flex flex-col sm:flex-row items-start justify-start">
            <div className="w-full sm:w-1/2 text-left pr-10">
              <h3 className="text-neutral-800 text-2xl font-bold uppercase">About</h3>
              
              <p className="text-neutral-800 text-md my-4">Sou designer gráfico de formação e desenvolvedor front-end por vocação. Decidi mudar de carreira há pouco mais de 10 anos e desde então já passei por startups, agências de publicidade e cheguei a ter a minha própria empresa.</p>
              
              {/*<p className="text-neutral-800 text-md my-4">Essa experiência me ajuda a ter uma visão mais ampla de cada negócio e me permite transitar com naturalidade entre os diversos setores que atuam no desenvolvimento de um projeto.</p>*/}

              <p className="text-neutral-800 text-md my-4">Já desenvolvi projetos para empresas como: Buscapé, McDonald's, Assaí e RPC/Gazeta do Povo.</p>

              <button className="text-neutral-800 text-md py-3 px-6 my-6 m-auto border-1 border-neutral-800">Download CV</button>
            </div>
            <div className="w-full sm:w-1/2">
              <div id="personal-info" className="flex flex-col gap-[16px] p-6 shadow-lg shadow-neutral-800/20">
                
                <h4 className="text-neutral-800 text-md font-bold uppercase">Skills</h4>
                <p>CSS / JavaScript / React / Vue / Next.js / Tailwind CSS / TypeScript / Node.js / Express / MySQL / Wordpress / Drupal</p>

                <h4 className="text-neutral-800 text-md font-bold uppercase">Languages</h4>
                <p>English / Spanish / Portuguese</p>
              </div>             
            </div>
          </div>
        </div>
    </>
  )   
}
