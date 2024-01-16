"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export default function SectionHeader({ title, slogan }) {
  const headeranimation = {
    visible: { opacity: 1,   
      x:0, y:0,
      scale: 1,
        transition: { duration: 0.9 } },
    hidden: { opacity: 0.2, x: -290,
      y: 10,
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
    <>
      <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={headeranimation}
    /*   whileHover={{ scale: 1.04 }} */
      >  
        {slogan}
      </motion.div>
      <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={headeranimation}
     /*  whileHover={{ scale: 1.04 }} */ className="text-center px-3 text-xl mt-5 w-10/12 items-center justify-center mx-auto   font-headfont">       
     
        {title}
      </motion.div>
    </>
  );
}