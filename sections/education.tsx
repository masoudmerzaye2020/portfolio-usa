import React from 'react'
import Data from '../data/education.json';

export default function Education() {
    return (
        <section id='education' className='w-full font-paragraph'>
            <div className='container mx-auto px-10 w-12/12 flex flex-wrap '>
                <div className=' lg:w-4/12 md:w-12/12 sm:w-12/12 text-3xl sm:mb-10 font-header-h'> Education :-</div>
             <div className='lg:w-8/12 d:w-12/12 sm:w-12/12'>  
            {
                Data.map(Education =>{
                    return(
                        <div className=' '>
                            <div className='text-3xl font-header-h pb-5'>
                            {Education.school}
                            </div>
                            <div>
                              {Education.description}
                            </div>
                            <div className='flex w-12/12'>
                                <div className='flex'>{Education.degree}</div>
                                <div className=' ml-auto'>----  {Education.graduated}</div>    
                            </div>
                            <div className="  border-solid border-b-4 mx-auto border-black dark:border-white my-5  ">
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
