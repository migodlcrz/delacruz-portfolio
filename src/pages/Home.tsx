import { CgWebsite } from "react-icons/cg";
import { FaCloud, FaDatabase, FaJava, FaPython } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { SiCisco } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import expo1 from "../assets/expo/photo1.png";
import expo2 from "../assets/expo/photo2.png";
import gtrails1 from "../assets/globaltekrails/photo1.png";
import gtrails2 from "../assets/globaltekrails/photo2.png";
import learnifyad1 from "../assets/learnify-admin/photo1.png";
import learnifyad2 from "../assets/learnify-admin/photo2.png";
import learnify1 from "../assets/learnify/photo1.png";
import learnify2 from "../assets/learnify/photo2.png";
import profile from "../assets/profile-cool.jpg";
import CertificationTag from "../components/CertificationTag";
import EducationTag from "../components/EducationTag";
import InfoTag from "../components/InfoTag";
import ProjectPanel from "../components/ProjectPanel";
import ServiceTag from "../components/ServiceTag";
import WorkTag from "../components/WorkTag";
import { HomeProps } from "../interfaces/ReferenceProps";

const Home: React.FC<HomeProps> = ({
  homeRef,
  aboutRef,
  servicesRef,
  projectsRef,
}) => {
  return (
    <div ref={homeRef} className="flex flex-col">
      {/* Home */}
      <div className="bg-white p-8 lg:py-24 lg:px-52">
        <div className="flex flex-col items-start lg:items-start lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-row lg:flex-col items-center justify-center lg:items-start lg:w-1/2 space-x-4 lg:space-x-0 lg:space-y-10">
            <img
              src={profile}
              alt=""
              className="h-10 w-10 lg:h-44 lg:w-44 rounded-3xl object-cover"
            />
            <span className="text-black poppins text-xl lg:text-6xl">
              Hello! I'm Lorenzo Miguel <br className="hidden lg:block" />
              Dela Cruz
            </span>
          </div>
          <div className="flex flex-col lg:w-1/2 space-y-6 space text-start">
            <span className="text-black gideon text-3xl lg:text-6xl">
              An aspiring Software Engineer based in Manila, Philippines
            </span>
            <span className="text-black poppins text-base lg:text-xl">
              Passionate about creating robust backend systems, APIs, cloud
              engineering, and related technologies.
            </span>
            <div className="flex flex-row space-x-2 items-center lg:items-end justify-start">
              <button
                onClick={() => {
                  const dialog = document.getElementById(
                    "contact_modal"
                  ) as HTMLDialogElement;
                  dialog.showModal();
                }}
                className="flex flex-row items-center space-x-2 border-[0.5px] border-gray-400 bg-white hover:bg-gray-200 transition-colors duration-300 py-2 px-5 text-xs lg:text-base rounded-full poppins text-black"
              >
                <span>Contact Me</span>
                <span>
                  <IoCall />
                </span>
              </button>
              <a
                href="/resume.pdf"
                download="Lorenzo_Dela_Cruz_Resume.pdf"
                className="flex flex-row items-center space-x-2 border-[0.5px] border-black py-2 px-5 rounded-full poppins text-white bg-black hover:bg-gray-700 text-xs lg:text-base transition-colors duration-300"
              >
                <span>Download Resume</span>
                <span>
                  <MdDownload />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Me */}
      <div
        ref={aboutRef}
        className="flex flex-col w-full bg-beige p-8 lg:py-24 lg:px-52 space-y-4 lg:space-y-10"
      >
        <div className="flex flex-col w-full bg-white rounded-3xl p-8 lg:p-20 space-y-6">
          <InfoTag
            title="About Me"
            text="Hello! I'm Lorenzo Dela Cruz, an aspiring Software Engineer based
              in Manila, Philippines. With a passion for backend development,
              API design, and cloud engineering, I strive to create robust,
              scalable, and efficient solutions that drive business success."
          />
          <InfoTag
            title="My Background"
            text="I have a solid foundation in full-stack development, particularly
              with the MERN stack (MongoDB, Express, React, Node.js) and
              Next.js. My journey in software engineering began with a curiosity
              for how web applications work, which quickly turned into a
              dedicated pursuit of mastering backend technologies and cloud
              services."
          />
          <InfoTag
            title="My Goal"
            text="My goal is to leverage my skills and knowledge to solve real-world
              problems and contribute to innovative projects. I am always
              excited to collaborate with like-minded individuals and teams to
              build impactful software solutions."
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-10">
          <div className="flex flex-col w-full lg:w-1/2 space-y-4">
            <span className="text-black gideon text-xl lg:text-3xl">
              Work Experiences
            </span>
            <WorkTag
              position={"IT Intern"}
              company={"GlobalTek BPO, Inc."}
              startDate={"December 2023"}
              endDate={"July 2024"}
            />
            <span className="text-black gideon text-xl lg:text-3xl">
              Education
            </span>
            <EducationTag
              school={"Far Eastern University Institute of Technology"}
              course={
                "Bachelor in Computer Science with Specialization in Software Engineering"
              }
              startDate={"August 2020"}
              endDate={"October 2024"}
            />
            <div className="border-b-[0.5px] border-gray-300" />
            <EducationTag
              school={"Our Lady of Fatima University"}
              course={"STEM - Engineering"}
              startDate={"June 2018"}
              endDate={"March 2020"}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 space-y-4">
            <span className="text-black gideon text-xl lg:text-3xl">
              Certifications
            </span>
            <div className="flex flex-col space-y-8">
              <CertificationTag
                icon={<FaJava />}
                title={"IT Specialist - Java"}
                issuedBy={"Certiport - A Pearson VUE Business"}
                dateIssued={"November 2021"}
              />
              <div className="border-b-[0.5px] border-gray-300" />
              <CertificationTag
                icon={<FaPython />}
                title={"IT Specialist - Python"}
                issuedBy={"Certiport - A Pearson VUE Business"}
                dateIssued={"December 2022"}
              />
              <div className="border-b-[0.5px] border-gray-300" />
              <CertificationTag
                icon={<SiCisco />}
                title={"CCNAv7: Introduction to Networks"}
                issuedBy={"Cisco"}
                dateIssued={"April 2022"}
              />
              <div className="border-b-[0.5px] border-gray-300" />
              <CertificationTag
                icon={<SiCisco />}
                title={"DevNet Associate"}
                issuedBy={"Cisco"}
                dateIssued={"January 2023"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div
        ref={servicesRef}
        className="flex flex-col w-full bg-white 10 p-8 lg:py-24 lg:px-52 space-y-4"
      >
        <div className="flex flex-row w-full space-y-4 items-center">
          <span className="text-black gideon text-xl lg:text-3xl w-full lg:w-1/2">
            I can help you with
          </span>
        </div>
        <div className="flex flex-col w-full space-y-10">
          <ServiceTag
            icon={<FaCloud />}
            title="Cloud Engineering"
            description="From deploying applications to managing cloud infrastructure, I
              can help you leverage cloud services for maximum performance and
              reliability."
            tools="Amazon Web Services (AWS), API Gateway, Lambda, S3 Bucket, Cloudfront"
          />
          <div className="border-b-[0.5px] border-gray-300" />
          <ServiceTag
            icon={<TbApi />}
            title="Creating API's"
            description="Whether you need RESTful or GraphQL APIs, I can design and
              implement robust, scalable, and secure solutions to meet your
              application's needs. My expertise ensures efficient data flow and
              seamless integration with your frontend or other services."
            tools="Express.js, Django, Postman"
          />
          <div className="border-b-[0.5px] border-gray-300" />
          <ServiceTag
            icon={<FaDatabase />}
            title="Database Ecosystem"
            description="I have experience working with various NoSQL databases, ensuring your data is stored efficiently and can be accessed quickly."
            tools="MongoDB, Mongoose"
          />
          <div className="border-b-[0.5px] border-gray-300" />
          <ServiceTag
            icon={<CgWebsite />}
            title="Web Design"
            description="I specialize in full-stack development using the MERN stack
              (MongoDB, Express, React, Node.js) and Next.js, creating dynamic
              and responsive web applications."
            tools="React, Next.js, Tailwind CSS, HTML, JavaScript"
          />
        </div>
      </div>
      {/* Projects */}
      <div
        ref={projectsRef}
        className="flex flex-col w-full bg-beige p-8 lg:py-24 lg:px-52 space-y-4 lg:space-y-10 "
      >
        <div className="text-black text-xl lg:text-3xl gideon">
          Featured Personal Projects
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-10 w-full">
          <ProjectPanel
            icon={undefined}
            title={"CS Expo 2023 Website"}
            description={
              "A website developed for the school expo, showcasing various thesis projects by students. This full stack project includes a custom database and API endpoints."
            }
            tools={"Typescript, Express, MongoDB"}
            photo1={expo1}
            photo2={expo2}
            link={"https://cs-expo-2023.vercel.app/"}
          />
          <div className=" w-full border-b-[0.5px] border-gray-300" />
          <ProjectPanel
            icon={undefined}
            title={"LMS Learnify: Admin"}
            description={
              "The administration side of a Learning Management System (LMS), built using MERN stack with features such as Google Auth, Stripe.js integration, and media encoding for posting videos, images, and files. This full stack application includes a custom database and API endpoints."
            }
            tools={"Typescript, Express, MongoDB"}
            photo1={learnifyad1}
            photo2={learnifyad2}
            link={"https://lms-admin-82v0.onrender.com"}
          />
          <div className=" w-full border-b-[0.5px] border-gray-300" />
          <ProjectPanel
            icon={undefined}
            title={"LMS Learnify"}
            description={
              "The student side of a Learning Management System (LMS), mirroring the administrative functionalities but tailored for student use. This full stack application includes a custom database and API endpoints."
            }
            tools={"Typescript, Express, MongoDB"}
            photo1={learnify1}
            photo2={learnify2}
            link={"https://learnify-xv2j.onrender.com"}
          />
          <div className=" w-full border-b-[0.5px] border-gray-300" />
          <ProjectPanel
            icon={undefined}
            title={"GlobaltekRails"}
            description={
              "An administration website for Metro Rail Transit (MRT) to manage rail transit operations, including CRUD functionalities for stations and user cards. This full stack application includes a custom database and API endpoints."
            }
            tools={"Typescript, Express, MongoDB"}
            photo1={gtrails1}
            photo2={gtrails2}
            link={"https://globaltekrails.onrender.com"}
          />
          <div className=" w-full border-b-[0.5px] border-gray-300" />
          <ProjectPanel
            icon={undefined}
            title={"GlobaltekRails: Mobile"}
            description={
              "A user-side mobile application for Metro Rail Transit (MRT) developed using React Native, allowing users to manage their balances. This full stack application includes a custom database and API endpoints."
            }
            tools={"Typescript, Express, MongoDB"}
            photo1={""}
            photo2={""}
            link={""}
          />
          <div className=" w-full border-b-[0.5px] border-gray-300" />
          <ProjectPanel
            icon={undefined}
            title={"GoGreen: Image Processing Thesis"}
            description={
              "A thesis project integrating YOLOv5 for image processing and a recommendation system to suggest recipes based on detected ingredients. This comprehensive full stack application includes a custom database and API endpoints."
            }
            tools={"Typescript, Express, MongoDB"}
            photo1={""}
            photo2={""}
            link={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
