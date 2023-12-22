"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Content from "../data/myinfo.json";
import Data from "../data/sociallink.json";

export default function Hero() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  /* themes */
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    const currnetTheme = theme == "system" ? systemTheme : theme;
    if (currnetTheme == "dark") {
      return (
        <BsFillSunFill
          fontSize="large"
          className="w-10 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <GiMoonBats
          fontSize="large"
          className="w-10 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <section id="home" className="w-full h-screen static">

 





      <div className="fixed  mr-5 right-0  mt-60">{renderThemeChanger()}</div>
      <button
        className="fixed mr-5 right-0 p-2 mt-80 rounded-full "
        onClick={handleClick}
      >
        <AiOutlineMenu size="28px" />
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        } fixed right-0 mr-16 object-right  mt-60 font-paragraph text-2xl`}
      >
        <div className=" flex flex-col px-5  inset-y-0">
          <Link legacyBehavior href="#about">
            <a className="p-3  rounded  font-bold items-center justify-center hover:underline hover:text-bold">
              About
            </a>
          </Link>
          <Link legacyBehavior href="#resume">
            <a className=" p-3  rounded  font-bold items-center justify-center hover:underline">
              Resume
            </a>
          </Link>

          <Link legacyBehavior href="#portfolio">
            <a className=" p-3  rounded font-bold items-center justify-center hover:underline">
              Portfolio
            </a>
          </Link>

          <Link legacyBehavior href="#contact">
            <a className=" p-3  rounded font-bold items-center justify-center hover:underline">
              Contact
            </a>
          </Link>
        </div>
      </div>
      {/* titile */}
      <div className="absolute lg:w-8/12 md:w-10/12 sm:w-12/12 lg:px-34 sm:px-5 lg:text-5xl sm:text-3xl  lg:mt-40 md:mt-30 sm:mt-20 lg:ml-40 sm:ml-0 font-headfont">
        <h1 className="responsive-headline">
          {/* {name} */}Hi! {}
        </h1>
        <h3>
          {/* {description} */}I am a {Content.main.name} and i am Full Stack
          Developer.
        </h3>
      </div>
      {/* menu */}
      <div className=" absolute inset-x-0 bottom-0 lg:w-6/12 md:8/12 sm:11/12 mb-40 mx-auto  flex font-paragraph text-2xl ">
        <div className="w-full sm:w-12/3 md:w-12/12 lg:w-12/12 xl:w-12/12  ">
          <nav className="flex flex-wrap items-center justify-center w-full mx-auto mb-6 nprd">
            <Link legacyBehavior href="/">
              <a className="px-4 py-1 mr-1  text-blueGray-500 transition duration-500 ease-in-out  focus:shadow-outline   hover:text-gray-500 ">
                Home
              </a>
            </Link>

            <Link legacyBehavior href="#about">
              <a className="px-4 py-1 mr-1 text-blueGray-500 transition duration-500 ease-in-out  focus:shadow-outline   hover:text-gray-500 ">
                About
              </a>
            </Link>

            <Link legacyBehavior href="#resume">
              <a className="px-4 py-1 mr-1 text-blueGray-500 transition duration-500 ease-in-out  focus:shadow-outline   hover:text-gray-500 ">
                Resume
              </a>
            </Link>

            <Link legacyBehavior href="#portfolio">
              <a className="px-4 py-1 mr-1  text-blueGray-500 transition duration-500 ease-in-out  focus:shadow-outline   hover:text-gray-500 ">
                Portfolio
              </a>
            </Link>

            <Link legacyBehavior href="#contact">
              <a className="px-4 py-1 mr-1 text-blueGray-500 transition duration-500 ease-in-out  focus:shadow-outline   hover:text-gray-500 ">
                Contact
              </a>
            </Link>
          </nav>
        </div>
      </div>

      <div className=" flex mb-20   items-center justify-center font-medium   absolute inset-x-0 bottom-0 shadow-xl lg:w-8/12  mx-auto ">
        {Data.map((Social) => {
          const linkstyle = Social.className;
          return (
            <>
              <div className="rounded-full  mx-2 py-5">
                <Link legacyBehavior href="" className={Social.className}>
                  <a
                    className={
                      "transition-colors hover:text-yellow-500 md:p-4 sm:p-2"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={Social.className}></div>
                  </a>
                </Link>
              </div>
            </>
          );
        })}
      </div>

      {/*   <Tsparticles /> */}
    </section>
  );
}
