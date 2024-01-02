import Content from '../data/myinfo.json';
import SectionHeader from '../components/section-header';
export default function About() {
    return (
        <section id="about" className='container px-10 mx-auto font-paragraph my-20'>
        <div className="flex flex-wrap items-center justify-center font-paragrap">
          <div className="flex md:w-4/12 sm:w-12/12 border-solid border-4 border-black">
          <div className=" mx-auto  absolute border-b-4 border-l-4 border-white p-5"></div>
            <img
              className="profile-pic "
              src={Content.main.image}
              alt="Masoud's Profile Pic"
            /> 
          </div>
          <div className="md:w-8/12 sm:w-12/12 p-20 ">
            <h2 className='text-4xl font-header-h'> <SectionHeader slogan="About Me" title=""/></h2>

            <p className='py-2'><SectionHeader slogan={Content.main.bio} title="" /></p>
            <div className="flex w-full">
              <div className="twelve columns contact-details">
                <h2 className='text-2xl pt-4'><SectionHeader slogan="Contact Details" title=""/></h2>
                <p className="address">
                  <span><SectionHeader slogan={Content.main.name} title=""/></span>
                  <br />
                  {/*   <span>
                       {street}
                    <br />
                    {city} {state}, {zip}
                  </span> */}
                  <br />
                  <span><SectionHeader slogan={Content.main.phone} title={""}/></span>
                  <br />
                  <span><SectionHeader slogan={Content.main.email} title={""}/></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  {/*   <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
}
