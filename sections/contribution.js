import React from "react";
import Data from "../data/contribution.json";
export default function Contribution() {
  return (
    <section id="portfolio" className="mx-auto">
      <div className="lg:text-5xl md:text-3xl sm:text-xl pt-28 pb-16 items-center justify-center text-center mx-auto font-header-h">
        <h2>Here are My Art Design Contribution</h2>
      </div>
      <div className="container flex flex-row mx-auto">
        <div className="flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12">
          {Data.map((projects) => {
            /* const bar_width = Skills.level;   */
            const projectImage = "images/portfolio/" + projects.image;
            return (
              <div
                key={projects.title}
                className="lg:w-3/12 md:w-4/12 sm:w-full px-5 py-2 font-paragraph flex justify-center mx-auto"
              >
                  <div class="flex justify-center py-6">
                    <div class="flex flex-col gap-5 text-center">
                        <img class="rounded-full p-6 bg-gray-50 border-xl border-gray-500 mx-auto" alt={projects.title} src={projectImage} />
                        <div class="flex flex-col gap-3">
                            <h1 class="font-bold text-2xl">{projects.title}</h1>
                            {/* <p class="text-gray-500 text-sm">Senior Full Stack Web Developer (Laravel, Vue, MySql)</p> */}
                        </div>
                        <a href={projects.url} target="_blank"  class="bg-gray-50 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white">Visit</a>
                    </div>
                </div>
                {/* <div className="shadow-md bg-clip-border rounded-xl  flex flex-wrap border-2 border-gray-400 border-solid w-full h-full">
                  <a href={projects.url} target="_blank" title={projects.title}>
                    <img className="rounded-t-[10px]" alt={projects.title} src={projectImage} />
                    <div className="overlay">
                      <div className="portfolio-item-meta p-2 items-center justify-center mx-auto text-center ">
                        <h5>{projects.title}</h5>
                        <p>{projects.category}</p>
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
