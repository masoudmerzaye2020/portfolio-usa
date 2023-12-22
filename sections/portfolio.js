import React from "react";
import Data from "../data/portfolio.json";
export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto">
      <div className="lg:text-5xl md:text-3xl sm:text-xl pt-28 pb-16 items-center justify-center text-center mx-auto font-header-h">
        <h2> Here should be the changes</h2>
      </div>

      <div className="container flex flex-row mx-auto">
        <div className="flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12">
          {Data.map((projects) => {
            /* const bar_width = Skills.level;   */
            const projectImage = "images/portfolio/" + projects.image;
            return (
              <div
                key={projects.title}
                className="lg:w-4/12 md:w-6/12 sm:w-full px-5 py-2 font-paragraph "
              >
                <div className="shadow-md bg-clip-border rounded-xl  flex flex-wrap border-2 border-gray-400 border-solid w-full h-full">
                  <a href={projects.url} target="_blank" title={projects.title}>
                    <img className="rounded-t-[10px]" alt={projects.title} src={projectImage} />
                    <div className="overlay">
                      <div className="portfolio-item-meta p-2 items-center justify-center mx-auto text-center ">
                        <h5>{projects.title}</h5>
                        <p>{projects.category}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
