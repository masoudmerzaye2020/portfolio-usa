import React from 'react';
import Content from '../data/skills.json';
export default function Resume() {

    return (
        <section id="resume" className='mx-auto ' >
            <div className='lg:text-5xl md:text-3xl sm:text-xl py-10 items-center justify-center text-center mx-auto font-header-h'>
             Here are my Key Skills
            </div>

              <div className='container flex flex-row mx-auto'>
              <div className='flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12'>

              {
                Content.map(Skills=>{
                  const bar_width = Skills.level;            
                  return(               

                    <div className='lg:w-6/12 md:w-6/12 sm:w-full px-5 py-2 font-paragraph'>                  
                      <div className='flex'>
                      <div className='  w-6/12'>{Skills.name}</div>
                      <div className='text-right w-6/12'>{Skills.level}</div> 
                      </div>              
                      <div className=' bg-gray-100 rounded-full w-12/12 border-solid border-2 border-black'>
                      <div    style={{ width: bar_width,  }} className="shadow-none  bg-purple-500 rounded-full pl-5">
                      {Skills.level}
                      </div>
                      </div>
                    </div>                         
            
                  )
                })
              }
              </div>
              </div>

      </section>
   
  );
}
