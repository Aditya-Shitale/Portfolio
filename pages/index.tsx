import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillHeart,
} from "react-icons/ai";
import {HiOutlineExternalLink} from "react-icons/hi"
import{BiLinkExternal} from "react-icons/bi"
import {SiLeetcode} from "react-icons/si"
import Image from "next/image";
import adi from "../public/wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import im1 from "../public/ChatFinal.png";
import im2 from "../public/newsfinal.png";
import im3 from "../public/nodefinal.png";
import im4 from "../public/textfinal.png";
import im5 from "../public/web5.png";
import im6 from "../public/web6.png";
import im7 from "../public/cppimg.png";
import im8 from "../public/JavaScript.png";
import im9 from "../public/HTML.png";
import im10 from "../public/CSS.png";
import im11 from "../public/Python.png";
import im12 from "../public/Dart.png";
import im13 from "../public/reactjs.png";
import im14 from "../public/next.png";
import im15 from "../public/flut.jpg";
import im16 from "../public/node.png";
import im17 from "../public/git.png";
import im18 from "../public/github.png";
import im19 from "../public/bash.png";
import im20 from "../public/name_l2e.png";
import im21 from "../public/Apoorv.png";
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import { motion , useScroll } from 'framer-motion'



export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aditya Shitale portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* ****************************section 1 starts***************************************** */}

        <section className="min-h-screen">
          {/* ****************************Navbar containing resume and dark mode button************** */}

          <nav className="py-10 mb-12 flex justify-between">
                      <h1 className="text-xl font-burtons  dark:text-white">
                      <Typewriter
            options={{
              strings: ['DevelopedByAdi', 'Hey Visitor...!!!'],
              autoStart: true,
              loop: true,
            }}
          />
            </h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" dark:text-white" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  target="_blank" rel="noreferrer"
                  href="https://drive.google.com/file/d/1mTl5d39cg0njSroEPar7_zDRs-cuV6t_/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* ****************Name and basic information about myself*************** */}
          <div className="text-center p-10 " >
            <h2 className="text-7xl py-2 text-teal-600 font-medium md:text-7xl " >
              Aditya Shitale
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl  dark:text-white">
                      <Typewriter
            options={{
              strings: ['Full-Stack Developer', 'Open-to-work'],
              autoStart: true,
              loop: true,
            }}
          />
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto  dark:text-white">
            I am a recent graduate of <b> Indian Institute of Information Technology, Kottayam</b>, holding a B.Tech degree in Computer Science (2024). You can reach out to me by clicking below.
            </p>
          </div>

          {/* *********************React icons with contact details************************ */}
          <div className="text-2xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white" >
               <a href="https://twitter.com/AdityaShitale" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>

               <a href="https://www.linkedin.com/in/aditya-shitale-664991214/" target="_blank" rel="noreferrer" ><AiFillLinkedin /></a>

               <a href="https://github.com/Aditya-Shitale" target="_blank" rel="noreferrer"> <AiFillGithub /></a>

               <a href="mailto:adityashitale4@gmail.com" target="_blank" rel="noreferrer"><AiFillMail /></a>
               <a href="https://leetcode.com/Adityashitale/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
          </div>

          {/* ***************emoji icon saying hi to visitor****************** */}
          <motion.div 
          initial="hidden" whileInView="visible" variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
      
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.25,
      
              }
            },
          }}
          className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 motion-safe:animate-pulse">
            <Image src={adi} alt="" layout="fill" objectFit="cover" />
          </motion.div>
        </section>

        {/* ***************************SECTION 2 start************************************* */}
        <section>
          {/* *****************************services i offer and description about it**************************** */}
          <motion.div 
          initial="hidden" whileInView="visible" variants={{
            hidden: {
      
              opacity: 0,
              x: 20,
            },
            visible: {
      
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
      
              }
            },
          }}
          >
            <h3 className="text-3xl py-1 font-bold  dark:text-white">
              Skills I have
            </h3>
            <p className="text-md font-serif py-2 leading-8 text-gray-800  dark:text-white">
              I am a sophomore at{" "}
              <span className="text-teal-500">
                Indian Institute of Information Technology, Kottayam
              </span>{" "}
              and have had the experience of developing and working on projects
              as a part of open source events. I have experience in working with
              many Javascript Libraries and Frameworks such as ReactJS for
              frontend and NodeJS as Backend. Also well versed in C++ . I am a
              flexible developer and a quick learner of new tech stacks. Would
              love to talk more about my projects over a meeting. Excited at the
              prospect of working as an Intern.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including frontend development,
              backend development,App developement,Web developement.
            </p>
          </motion.div>
          {/* ***************************Card explaining SKills**************************** */}
          {/* *****************card #1************** */}
          <div className="lg:flex gap-10 ">
            <motion.div 
            initial="hidden" whileInView="visible" variants={{
              hidden: {
        
                opacity: 0,
                x: 20,
              },
              visible: {
        
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
        
                }
              },
            }}
            className="text-center shadow-2xl p-10 rounded-xl  my-10 w-full  lg:w-1/3   dark:bg-white">
              <Image className="animate-bounce" src={design} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
              <p className="py-2 w-1/3 md:w-1 "></p>
              <h4 className="py-6 font-bold text-teal-600">Languages  I use</h4>
            <div className="hover:scale-150 duration-300"> <Image className="display: inline" src={im7} alt="" height={50}/><p className="text-gray-800 font-bold py-4 pb-5">C++</p></div>
           <div className="hover:scale-150 duration-300"> <Image className="display: inline" src={im8} alt="" height={50}/>  <p className="text-gray-800 font-bold py-4 pb-5">JavaScript</p> </div>
           <div className="hover:scale-150 duration-300"> <Image className="display: inline" src={im9} alt="" height={50}/>  <p className="text-gray-800 font-bold py-4">HTML</p></div>
           <div className="hover:scale-150 duration-300"> <Image className="display: inline" src={im10} alt="" height={50}/> <p className="text-gray-800 font-bold py-4">CSS</p></div>
           <div className="hover:scale-150 duration-300"> <Image className="display: inline" src={im11} alt="" height={50}/> <p className="text-gray-800 font-bold py-4">Python</p></div>
           <div className="hover:scale-150 duration-300"> <Image className="display: inline" src={im12} alt="" height={50}/> <p className="text-gray-800 font-bold py-4">Dart</p></div>
            </motion.div>

            {/* *****************card #2************** */}

            <motion.div 
            initial="hidden" whileInView="visible" variants={{
              hidden: {
        
                opacity: 0,
                x: 20,
              },
              visible: {
        
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
        
                }
              },
            }}
            className="text-center shadow-2xl p-10 rounded-xl w-full  lg:w-1/3  my-10 dark:bg-white">
              <Image className="animate-bounce" src={code} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Framework</h3>
              <p className="py-2 w-1/3 md:w-1 "></p>
              <h4 className="py-6 font-bold text-teal-600">Frameworks tools I use</h4>
             <div className="hover:scale-150 duration-300"> <Image  className="display: inline animate-spin-slow" height={50} src={im13} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">ReactJs</p></div> 
             <div className="hover:scale-150 duration-300"> <Image  className="display: inline" height={50} src={im16} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">NodeJs</p></div> 
             <div className="hover:scale-150 duration-300"> <Image  className="display: inline" height={50} src={im14} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">Next.js</p></div> 
             <div className="hover:scale-150 duration-300"> <Image  className="display: inline" height={50} src={im15} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">Flutter</p></div> 
            </motion.div>

            {/* *****************card #3************** */}

            <motion.div
            initial="hidden" whileInView="visible" variants={{
              hidden: {
        
                opacity: 0,
                x: 20,
              },
              visible: {
        
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
        
                }
              },
            }}
            className="text-center shadow-2xl p-10 rounded-xl w-full lg:w-1/3  my-10 dark:bg-white">
              <Image className="animate-bounce" src={consulting} alt="" width={100}  height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">tools i use</h3>
              <p className="py-2 w-1/3 md:w-1  "> </p>
             <h4 className="py-6 font-bold text-teal-600">tools I use</h4>
              <div className="hover:scale-150 duration-300"> <Image  className="display: inline " height={50} src={im17} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">Git</p> </div>
              <div className="hover:scale-150 duration-300"> <Image  className="display: inline " height={50} src={im18} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">Github</p></div>
              <div className="hover:scale-150 duration-300"> <Image  className="display: inline " height={50} src={im19} alt=""/> <p className="text-gray-800 font-bold py-4 pb-5">bash</p></div>
        
            </motion.div>
          </div>
        </section>

        <section>
          <motion.div   initial="hidden" whileInView="visible" variants={{
            hidden: {
      
              opacity: 0,
              x: 20,
            },
            visible: {
      
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
      
              }
            },
          }}>
          <h3 className="text-3xl py-1 font-bold  dark:text-white">Experience</h3>
          <div className="text-center flex flex-col shadow-2xl p-10 rounded-xl w-full gap-3  my-10 lg:flex-row dark:bg-white">
             <a href="https://login2explore.com/" target="_blank" rel="noreferrer"> <div><Image className="w-auto h-30 my-7 md:h-20" src={im20} alt="" /></div></a>
                <div>
                  <text className="font-bold">Position: Full-Stack Developer Intern</text><br/>
                  Login2Xplore offers ready to use <span className="text-teal-500">JsonPowerDB API </span>for making work efficiently, effectively and faster.
                   Worked with this new Database <span className="text-teal-500">Devevloped</span> a dashboard fetching data from this database using its own API calls,
                   where you can do CRUD operations on your data and can download your data in various formats.
                   <span className="font-bold text-teal-500 "> Tech-Stack:</span> JavaScript,jQuery,Bootstrap
                   <br/>
                   <a href="https://drive.google.com/file/d/10_8qqOjXzj8PtDMsV7HhRGSLFQ9EK3vx/view?usp=share_link" target="_blank" rel="noreferrer" ><div className="font-bold flex flex-row">Certificate<HiOutlineExternalLink></HiOutlineExternalLink></div>
                   </a>
                  </div>
              
                 </div>
          <div className="text-center flex flex-col shadow-2xl p-10 rounded-xl w-full gap-3  my-10 lg:flex-row dark:bg-white">
             {/* <a href="https://apoorviiitk.co/" target="_blank" rel="noreferrer"> <div><Image className="w-auto rounded-lg h-40 mx-40 md:mx-1 md:h-20" src={im21} alt="" /></div></a> */}
                <div>
                  <text className="font-bold">Frontend Development-apoorv(2023)</text><br/>
                  Website Development: I had the opportunity to work on the development of the <span className="text-teal-500">Apoorv website </span>, which was the
official website for our college&#39;s annual <span className="text-teal-500">Techno-cultural</span> fest.Through this experience, I gained valuable skills in web
development and project management, and learned how to work effectively in a team environment.
                   <span className="font-bold text-teal-500 "> Tech-Stack:</span> JavaScript,Next-JS
                   <br/>
                  </div>
              
                 </div>
                 
              </motion.div>
        </section>

        {/* ***************************SECTION 3 start************************************* */}

        <section>
          {/* ***************************portfolio explaining about my projects and experiences************************** */}
          <motion.div   initial="hidden" whileInView="visible" variants={{
            hidden: {
      
              opacity: 0,
              x: 20,
            },
            visible: {
      
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
      
              }
            },
          }}>
            <h3 className="text-3xl py-1 font-bold  dark:text-white">Portfolio</h3>
            <p className="text-md font-serif py-2 leading-8 text-gray-800  dark:text-white">
              Since the start I am working as individual and created projects to
              gain
              <span className="text-teal-500"> Knowledge </span>
              and to improve my<span className="text-teal-500"> Skills. </span>
              Being a Junior at college, I have had the experience of creating
              and also working on projects just for fun that has a good user
              experience meanwhile being scalable and efficient under the hood.
              I use NodeJS/FastAPI for the backend of most of the projects that
              I make which have a ReactJS frontend.I also have basic Idea about
              Flutter for App development.
            </p>
            <p className="text-3xl py-1 my-10 font-bold  dark:text-white">
              Checkout my other projects............!  !  !
            </p>
            <p className="font-serif text-md dark:text-white">Click on the image to go on respective repository</p>
          </motion.div>
<motion.div
  initial="hidden" whileInView="visible" variants={{
    hidden: {

      opacity: 0,
      x: 20,
    },
    visible: {

      opacity: 1,
      x: 0,
      transition: {
        duration: 1,

      }
    },
  }}
className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

   {/* ***************************CHATAPP pic with info***************************** */}
  <div className="basis-1/3 flex-1 ">
    <div className="relative hover:scale-110 duration-300">
      <a href="https://github.com/Aditya-Shitale/Chat-App" target="_blank" rel="noreferrer">
          <Image src={im1} className="rounded-lg object-cover"  w-full  h-full  layout="responsive"  alt="" />
             <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                <p className="text-lg text-orange-500 font-bold">  Chat-App</p>
                  <p className="text-xs text-white">This a is chat Application based on React-Js and backend as firebase, here you can create an account by unique mail ids and also can set your profile picture, find friends by searching if they have an account on app</p>
             </div>
      </a>
     </div>
     <div className="flex flex-row gap-2">
     <a href="https://github.com/Aditya-Shitale/Chat-App" target="_blank" rel="noreferrer"> <AiFillGithub className="text-black text-xl hover:scale-100 duration-105 dark:text-white " /></a> 
     <a href="https://chat-app-wheat-two.vercel.app/" target="_blank" rel="noreferrer"> <p><BiLinkExternal className="text-black text-xl hover:scale-100 duration-105 dark:text-white " /></p></a> 
      
     </div>

  </div>

      {/* ***************************NEWS MEDIA pic with info***************************** */}

    <div className="basis-1/3 flex-1">
      <div className="relative hover:scale-110 duration-300">
         <a href="https://github.com/Aditya-Shitale/News_Media" target="_blank" rel="noreferrer">
              <Image src={im2}  className="rounded-lg object-cover "  w-full  h-full  layout="responsive"  alt="" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                  <p className="text-lg text-orange-500 font-bold">NEWSMEDIA- a live news app</p>
                    <p className="text-xs text-white">This is a site where you can see live news Build using React-Js with help of news API, various sections are made for different types of news.</p>
             </div>
          </a>
      </div> 
      <div>
      <a href="https://github.com/Aditya-Shitale/News_Media" target="_blank" rel="noreferrer"> <AiFillGithub className="text-black text-xl hover:scale-100 duration-105 dark:text-white " /></a> 
      </div>
    </div>



   {/* ***************************CLOUDNOTEBOOK pic with info***************************** */}

   <div className="basis-1/3 flex-1">
      <div className="relative hover:scale-110 duration-300">
         <a href="https://github.com/Aditya-Shitale/CloudNotebook" target="_blank" rel="noreferrer">
              <Image src={im3}  className="rounded-lg object-cover "  w-full  h-full  layout="responsive"  alt="" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                  <p className="text-lg text-orange-500 font-bold">CloudNotebook- your own TO DO List</p>
                    <p className="text-xs text-white">This is site where you can login by your email address and password. You can perform add, update, delete your Notes (crud operations). Its on cloud so you can access it from anywhere. Build using frontend React-Js and MERN stack for backend part.</p>
             </div>
          </a>
      </div>  
      <a href="https://github.com/Aditya-Shitale/CloudNotebook" target="_blank" rel="noreferrer"> <p><AiFillGithub className="text-black text-xl hover:scale-100 duration-105 dark:text-white " /></p></a>   
    </div>


     {/* ***************************TEXTEDITOR pic with info***************************** */}

    <div className="basis-1/3 flex-1">
      <div className="relative hover:scale-110 duration-300">
          <a href="https://github.com/Aditya-Shitale/TextEditor" target="_blank" rel="noreferrer">
              <Image src={im4} className="rounded-lg object-cover " w-full h-full layout="responsive" alt="" />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                <p className="text-lg text-orange-500 font-bold">TEXT EDITS — editing a text</p>
                  <p className="text-xs text-white"> This is a site where you can simply edit a text like making it all caps, all small, copy a text, minimum time required to read the entered text, and the number of words in the text, also there is a dark mode option. It is built using React js.</p>
             </div>
          </a>
      </div>
     <div className="flex flex-row gap-2">
        <a  href="https://github.com/Aditya-Shitale/TextEditor" target="_blank" rel="noreferrer"> <p><AiFillGithub className="text-black text-xl hover:scale-100 duration-105 dark:text-white " /></p></a> 
        <a href="https://text-editor-cyan.vercel.app/" target="_blank" rel="noreferrer"> <p><BiLinkExternal className="text-black text-xl hover:scale-100 duration-105 dark:text-white " /></p></a> 
      </div>
    </div>

 
            {/* <div className="basis-1/3 flex-1">
              <Image
                src={im5}
                className="rounded-lg object-cover hover:scale-110 duration-300"
                w-full
                h-full
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={im6}
                className="rounded-lg object-cover hover:scale-110 duration-300"
                w-full
                h-full
                layout="responsive"
                alt=""
              ></Image>
            </div> */}
          </motion.div>
        </section>

        {/* ***************************SECTION 4 start FOOTER************************************* */}

        <section>
          <span className="flex justify-center py-5">
            {" "}
            <AiFillHeart className="text-red-600 text-xl animate-pulse" />
            <span className="text-teal-500 font-burtons text-sm ">
              Created By Aditya Shitale
            </span>
          </span>
        </section>
      </main>
    </div>
  );
}
