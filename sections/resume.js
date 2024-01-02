"use client";

import React from "react";
import Content from "../data/skills.json";
import TechSkill from "../data/techskill.json";
import CustomerService from "../data/cserviceskills.json";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SectionHeader from '../components/section-header'

export default function Resume() {

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
    <section id="resume" className="mx-auto ">
      <div className="lg:text-5xl md:text-3xl sm:text-xl py-10 items-center justify-center text-center mx-auto font-header-h">
      <SectionHeader
              slogan="My Web Development Skills"
              title=""
            />
      </div>
      
      <div className="container flex flex-row mx-auto">
        <div className="flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12">
          {Content.map((Skills) => {
            const bar_width = Skills.level;
            return (
              <div className="w-full sm:w-6/12 px-5 py-2 font-paragraph">
                <div className="flex">
                  <div className="  w-6/12"><SectionHeader slogan={Skills.name} title=""/></div>
                  <div className="text-right w-6/12"><SectionHeader slogan={Skills.level} title=""/></div>
                </div>
                <div
             
                className=" bg-gray-100 rounded-full w-12/12 border-solid border-[1px] border-black">
                  <div
                     style={{ width: bar_width }}
                    className="shadow-none  bg-blue-800 rounded-full pl-5 h-2"
                  >
                   
                    {/* {Skills.level} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:text-5xl md:text-3xl sm:text-xl py-10 items-center justify-center text-center mx-auto font-header-h">
        My Tech Skills
      </div>

      <div className="container flex flex-row mx-auto">
        <div className="flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12">
          {TechSkill.map((Skills) => {
            const bar_width = Skills.level;
            return (
              <div className="w-full sm:w-6/12 px-5 py-2 font-paragraph">
                <div className="flex">
                  <div className="  w-6/12">{Skills.name}</div>
                  <div className="text-right w-6/12">{Skills.level}</div>
                </div>
                <div className=" bg-gray-100 rounded-full w-12/12 border-solid border-[1px] border-black">
                  <div
                    style={{ width: bar_width }}
                    className="shadow-none  bg-blue-800 rounded-full pl-5 h-2"
                  >
                    {/* {Skills.level} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:text-5xl md:text-3xl sm:text-xl py-10 items-center justify-center text-center mx-auto font-header-h">
        My Customer Service Skills
      </div>

      <div className="container flex flex-row mx-auto">
        <div className="flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12">
          {CustomerService.map((Skills) => {
            const bar_width = Skills.level;
            return (
              <div className="w-full sm:w-6/12 px-5 py-2 font-paragraph">
                <div className="flex">
                  <div className="  w-6/12">{Skills.name}</div>
                  <div className="text-right w-6/12">{Skills.level}</div>
                </div>
                <div className=" bg-gray-100 rounded-full w-12/12 border-solid border-[1px] border-black">
                  <div
                    style={{ width: bar_width }}
                    className="shadow-none  bg-blue-800 rounded-full pl-5 h-2"
                  >
                    {/* {Skills.level} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
