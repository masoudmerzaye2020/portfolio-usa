import React from 'react'
import Data from '../data/experience.json';

export default function Experience() {
    return (
        <section id='education' className='font-paragraph'>
                
            <div className='container  mx-auto px-10 flex flex-wrap lg:pt-20'>
                <div className='lg:w-4/12 md:w-12/12 sm:w-12/12 text-3xl mx-auto sm:mb-10 font-header-h'> Experiance :-</div>
             <div className='lg:w-8/12 md:w-12/12 sm:w12/12 '>  
            {
                Data.map(Experiance =>{
                    return(
                        <div className='w-full '>
                            <div className='text-3xl font-header-h'>
                            {Experiance.title}
                            </div>
                            <div>
                                {Experiance.company}
                            </div>
                            <div className='w-full '>
                             
                               {Experiance.description}
                             
                                {Experiance.years}
                              
                            
                            
                            </div>
                          {/*   <div className='flex w-12/12'>
                                <div className='flex'>{Experiance.description}</div>
                                <div className=' ml-auto'>{Experiance.years}</div>    
                            </div> */}
                            <div className="  border-solid border-b-4 mx-auto border-black my-5  ">
                          </div>   
                        </div>                      
                            )
                        })

                    }
            </div> 
            </div>    
        </section>
    )
}