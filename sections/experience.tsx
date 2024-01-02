"use client";
import React from "react";
import Data from "../data/experience.json";
import SectionHeader from "../components/section-header";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Experience() {
    const headeranimation = {
        visible: { opacity: 1,   
          x:0, y:0,
          scale: 1,
            transition: { duration: 0.9 } },
        hidden: { opacity: 0.3, x: 0,
          y: 70,
          scale: 0,
          rotate: 0,  transition: { duration: 1 } }
      };
    
      const controls = useAnimation();
      const [ref, inView] = useInView();
    
      useEffect(() => {
        if (inView) {
          controls.start("visible");
          
        }else
        {
          controls.start("hidden");
        }
      }, [controls, inView]);

      
  return (
    <section id="education" className="font-paragraph">
      <div className="container  mx-auto px-10 flex flex-wrap lg:pt-20">
        <div className="lg:w-4/12 md:w-12/12 sm:w-12/12 text-3xl mx-auto sm:mb-10 font-header-h">
          {" "}
          <SectionHeader slogan="Experience:-" title="" />
        </div>
        <div className="lg:w-8/12 md:w-12/12 sm:w12/12 ">
          {Data.map((Experiance) => {
            return (
              <div className="w-full ">
                <div className="text-3xl font-header-h">
                    <SectionHeader slogan={Experiance.title} title="" />
                    </div>
                <div><SectionHeader slogan={Experiance.company} title=""/></div>
                <div className="w-full ">
                  <SectionHeader slogan={Experiance.description} title=""/>

<SectionHeader slogan={Experiance.years} title=""/>
                </div>
                {/*   <div className='flex w-12/12'>
                                <div className='flex'>{Experiance.description}</div>
                                <div className=' ml-auto'>{Experiance.years}</div>    
                            </div> */}
                <div  className="  border-solid border-b-4 mx-auto border-black my-5  ">
                <SectionHeader slogan="" title="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
