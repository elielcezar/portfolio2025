'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do projeto e tecnologias utilizadas.",
      type: "site"
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Descrição do projeto e tecnologias utilizadas.",
      type: "design"
    },
    {
      id: 3,
      title: "Projeto 3",
      description: "Descrição do projeto e tecnologias utilizadas.",
      type: "site"
    }
  ];

  let filteredItems;
  activeTab === 'all' ? 
    filteredItems = portfolioItems : 
    filteredItems = portfolioItems.filter(item => item.type === activeTab)

  return (
    <>
        <div id="portfolio" className="bg-gray-100 w-full py-10 sm:py-20 my-0 px-10 xl:px-0">
            <div className="w-full lg:max-w-[1100px] lg:mx-auto">
            <h3 className="text-neutral-800 text-2xl font-bold uppercase mb-6">Portfolio</h3>
            
            {/* Abas de navegação */}
            <div className="flex gap-4 mb-8">
                <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 ${activeTab === 'all' ? 'bg-amber-300' : 'bg-white'} text-neutral-800 font-medium rounded-md hover:bg-amber-400 transition-colors`}
                >
                All
                </button>
                <button 
                onClick={() => setActiveTab('site')}
                className={`px-6 py-2 ${activeTab === 'site' ? 'bg-amber-300' : 'bg-white'} text-neutral-800 font-medium rounded-md hover:bg-amber-100 transition-colors`}
                >
                Code
                </button>
                <button 
                onClick={() => setActiveTab('design')}
                className={`px-6 py-2 ${activeTab === 'logo' ? 'bg-amber-300' : 'bg-white'} text-neutral-800 font-medium rounded-md hover:bg-amber-100 transition-colors`}
                >
                Design
                </button>
                <button 
                onClick={() => setActiveTab('project')}
                className={`px-6 py-2 ${activeTab === 'logo' ? 'bg-amber-300' : 'bg-white'} text-neutral-800 font-medium rounded-md hover:bg-amber-100 transition-colors`}
                >
                Personal Projects
                </button>
            </div>

            <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                <div key={item.id} className="portfolio-item bg-white shadow-lg shadow-neutral-600/10 rounded-md overflow-hidden">
                    <div className="p-6">
                    <h4 className="text-neutral-800 text-md font-bold uppercase">{item.title}</h4>
                    <p className="text-neutral-800 text-md text-neutral-600 mt-2">{item.description}</p>
                    <div className="mt-4">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm capitalize">
                        {item.type}
                        </span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </>
  )

  

}