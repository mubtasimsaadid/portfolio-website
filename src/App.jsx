import DataImage from "./data";
import {listTools} from "./data";
import { listProjects } from "./data";
function App() {
  
  return (
    <>
    {/* Home */}
      <div className="hero grid md:grid-cols-2 items-center pt-30 xl:gap-0 gap-6 grid-cols-1">
        <div>
          {/*<div className="flex items-center gap-3 mb-6 bg-[#DBDBC3] w-fit p-4 rounded-2xl">*/}
            {/*<img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"></img>*/}
            {/*<p classname="col-span-1 flex justify-end items-start">"Making numbers speak for smarter decisions."</p>*/}
          {/*</div>*/}
          <div class="animate__animated animate__fadeInDown animate__delay-1s"><h1 className="text-5xl/tight font-bold mb-8"> <span className="">Hi,</span> I'm Mubtasim Saadid Ahmed </h1></div>
          <div class="animate__animated animate__fadeInLeft animate__slower animate__delay-2s">
            <p className="text-base/loose mb-8  opacity-85">
            Blending expertise in Data Analysis, Business Intelligence, and Data Science to deliver actionable insights and innovative solutions. 
            Proficient in Python, SQL, Power BI, Google Looker Studio, and Excel, I specialize in building data-driven solutions that fuel smarter decisions and sustainable growth.
            Exploring different areas of analytics, including data cleaning, data optimization, reporting, and visualization, aiming to highlight what matters most.
            </p>
          </div>
          <div class="animate__animated animate__fadeInRight animate__slower animate__delay-3s">
            <div className="flex items-center sm:gap-5 gap-4">
              <a href="https://www.linkedin.com/in/mubtasimsaadid/" className="bg-[#D2B48C] p-4 rounded-4xl hover:bg-[#DBDBC3] transition-transform duration-300 ease-linear hover:-translate-y-2"> 
                <i class="ri-linkedin-box-fill ri-lg"></i> 
              </a>
              <a href="https://github.com/mubtasimsaadid" className="bg-[#D2B48C] p-4 rounded-4xl hover:bg-[#DBDBC3] transition-transform duration-300 ease-linear hover:-translate-y-2"> 
                <i class="ri-github-fill ri-lg"></i> 
              </a>

              <a href="mailto:mubtasim.saadid02@gmail.com" className="bg-[#D2B48C] p-4 rounded-4xl hover:bg-[#DBDBC3] transition-transform duration-300 ease-linear hover:-translate-y-2"> 
                <i class="ri-mail-line ri-lg"></i> 
              </a>
              <a href="/public/assets/Mubtasim_Saadid_Ahmed_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#D2B48C] p-4 rounded-2xl hover:bg-[#DBDBC3] transition-transform duration-300 ease-linear hover:-translate-y-2"> 
                Download CV <i class="ri-download-line"></i>
              </a>
              {/*
              <button class="hover:before:bg-[#D2B48C] relative h-[55px] w-40 overflow-hidden bg-[#DBDBC3] px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#D2B48C] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full rounded-2xl">
                <span class="relative z-10">Swipe</span>
              </button>*/}
              {/*<a href="#"> View Projects </a>*/}
            </div>
          </div>
        </div>
        <div class="animate__animated animate__fadeInRight animate__slower animate__delay-2s">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-[400px] rounded-xl md:ml-auto" loading="lazy" />
        </div>
      </div>

      {/* About */}
      <div className="about mt-32 py-41" id="about">
        <div data-aos="zoom-in" data-aos-duration="4000"> <h1 className="text-center text-4xl/snug font-bold mb-5"> About Me </h1> </div>
        <div>
          <div data-aos="fade-down-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-[#DBDBC3] rounded-2xl">
              <p className="text-base/loose mb-6">
                I'm <strong class="text-font-bold">Mubtasim Saadid Ahmed</strong>, a driven data enthusiast, passionate about transforming data into insights. With a strong foundation in analytics and a growing focus on data science, I aim to blend technical expertise with problem-solving skills to deliver impactful, data-driven solutions.
              </p>
              <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
              <p className="text-base/loose mb-6" data-aos="fade-right" data-aos-duration="1000"> As a Computer Science and Engineering graduate from <a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer" className="text-blue-600">BRAC University</a>, I aim to harness my technical expertise, analytical mindset, and leadership skills to craft innovative solutions and extract valuable insights. With the rise of digital transformation, I am actively strengthening my skills in Machine Learning and ETL processes by engaging in real-world projects, deepening my knowledge of data pipelines and visualization. </p>
              <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" data-aos="fade-right" data-aos-duration="1000"/>
              <p className="text-base/loose mb-6" data-aos="fade-right" data-aos-duration="1000">
                  In near future, I see myself as a well-rounded data professional who has progressed from analysis into a more strategic role, someone who not only works with data but also shapes how it’s used to drive key business decisions. My aim is to be in a position where I’m trusted to handle complex challenges, influence data-driven strategy, and continuously bring measurable value to the organization.
              </p>
          </div>
          </div>
          
        </div>


        {/* Skills */}

        <div className="skills mt-32 py-32" id="skill">  
          <div data-aos="zoom-in" data-aos-duration="1000"> <h1 className="text-center text-4xl/snug font-bold mb-5"> Skills </h1> </div>
          <div data-aos="fade-right" data-aos-duration="1000"> <p className="w-full text-base/loose text-center opacity-80"> Tools and technologies I leverage to transform ideas into functional, scalable, and impactful solutions. </p> </div>
          <div className="skills-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) =>(
              <div>
                <div className="flex items-center gap-2 p-3" key={tool.id} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                  <img src={tool.gambar} alt="Tools Image" className="w-14 p-1 group-hover"/>
                  <div>
                    <h4>{tool.name}</h4>
                    {/*<p>{tool.ket}</p>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
        
        {/* Skills */}

        {/* Projects */}
        <div className="projects mt-32 py-10" id="projects">
          <div data-aos="zoom-in" data-aos-duration="1000"> <h1 className="text-center text-4xl/snug font-bold mb-5"> Projects </h1> </div>
          <div data-aos="fade-left" data-aos-duration="1000"> 
            <p className="w-full text-base/loose text-center opacity-80">
              Explore a range of projects showcasing my expertise to uncover trends, automation, and optimizing workflows
            </p> 
          </div>
          <div>
            <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
              {listProjects.map(project => (
                <div class="bg-[#FFFFF0] border border-gray-200 rounded-lg shadow-sm" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={project.dad}>
                  <div key={project.id} data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"> {/*data-aos-delay={project.dad}*/}
                    <div className="relative group rounded-t-lg overflow-hidden">
                        <img className="w-full h-70 transition-opacity duration-300 group-hover:opacity-50" src={project.gambar} alt="Projects Image" loading="lazy"/>
                        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="bg-[#D2B48C] p-3 rounded-full shadow-lg hover:bg-gray-200 transition">
                              <i class="ri-github-fill ri-lg"></i>
                          </a>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#D2B48C] p-3 rounded-full shadow-lg hover:bg-gray-200 transition">
                            <i class="ri-external-link-line ri-lg"></i>
                          </a>
                        </div>
                    </div>
                    <div>
                      <h1 className="text-center text-l font-bold my-4"> {project.name} </h1>
                      <p className="text-base/loose mb-6 w-full mx-auto p-5"> {project.desciption} </p>
                      <div className="flex flex-wrap gap-4 p-5">
                        {project.tools.map((tool,index) => (
                          <p className="py-1 px-3 bg-[#DBDBC3] rounded-md" key={index}>
                            {tool}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Projects */}

        {/* Contact */}
        <div className="contact mt-32 sm:p-10 p-0" id="contact">
          <div data-aos="zoom-in" data-aos-duration="1000"> <h1 className="text-4xl mb-4 font-bold text-center"> Contact </h1> </div>
          <div data-aos="fade-right" data-aos-duration="1000"> <p className="w-full text-base/loose text-center mb-10 opacity-80"> Connect with me </p> </div>
          <form action="https://formsubmit.co/mubtasim.saadid02@email.com" method="POST" className="bg-[#DBDBC3] p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold"> Name </label>
                <input type="text" name="name" placeholder="Enter your name" className="border border-zinc-600 p-2 rounded-md" required/>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold"> Email </label>
                <input type="email" name="email" placeholder="Enter your email" className="border border-zinc-600 p-2 rounded-md" required/>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold"> Phone Number </label>
                <input type="number" name="number" placeholder="Enter your phone number" className="border border-zinc-600 p-2 rounded-md"/>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold"> Message </label>
                <textarea name="message" id="message" cols="45" rows="5" placeholder="Write your query here..." className="border border-zinc-600 p-2 rounded-md"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-[#D2B48C] hover:bg-[#d1ab79] p-3 rounded-lg w-full cursor-pointer"> Send Message </button>
              </div>
            </div>
          </form>
        </div>
      
        {/* Contact */}

      </div>{/* About */}
    </>
  )
}

export default App;