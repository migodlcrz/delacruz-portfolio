import { CgWebsite } from "react-icons/cg";
import { FaCloud, FaDatabase, FaJava, FaPython } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { SiCisco } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import profile from "../assets/profile.jpg";
import CertificationTag from "../components/CertificationTag";
import EducationTag from "../components/EducationTag";
import ServiceTag from "../components/ServiceTag";
import WorkTag from "../components/WorkTag";
import InfoTag from "../components/InfoProps";
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
      <div className="flex flex-col bg-white lg:py-24 lg:px-52">
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col w-1/2 space-y-2">
            <div className="flex flex-col space-y-10">
              <img src={profile} alt="" className="h-44 w-44 rounded-3xl" />
              <span className="text-black poppins lg:text-6xl">
                Hello! I'm Lorenzo Miguel <br />
                Dela Cruz
              </span>
            </div>
          </div>
          <div className="flex flex-col w-1/2 space-y-6 space text-start">
            <span className="text-black gideon text-6xl">
              An aspiring Software Engineer based in Manila, Philippines
            </span>
            <span className="text-gray-600 poppins text-xl">
              Passionate about creating robust backend systems, APIs, cloud
              engineering, and related technologies.
            </span>
            <div className="flex flex-row space-x-2 items-end justify-start">
              <button className="flex flex-row items-center space-x-4 border-[0.5px] border-gray-400 py-2 px-5 rounded-full poppins text-black">
                <span>Contact Me</span>
                <span>
                  <IoCall />
                </span>
              </button>
              <a
                href="/resume.pdf"
                download="Lorenzo_Dela_Cruz_Resume.pdf"
                className="flex flex-row items-center space-x-4 border-[0.5px] border-black py-2 px-5 rounded-full poppins text-white bg-black"
              >
                <span>Download Resume</span>
                <span>
                  <MdDownload />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full"></div>
      </div>
      {/* About Me */}
      <div
        ref={aboutRef}
        className="flex flex-col w-full bg-beige py-24 px-52 space-y-10"
      >
        <div className="flex flex-col w-full bg-white rounded-3xl p-20 space-y-6">
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
        <div className="flex flex-row w-full space-x-10">
          <div className="flex flex-col w-1/2 space-y-4">
            <span className="text-black gideon text-3xl">Work Experiences</span>
            <WorkTag
              position={"IT Intern"}
              company={"GlobalTek BPO, Inc."}
              startDate={"December 2023"}
              endDate={"July 2024"}
            />
            <span className="text-black gideon text-3xl">Education</span>
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
          <div className="flex flex-col w-1/2 space-y-4">
            <span className="text-black gideon text-3xl">Certifications</span>
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
        className="flex flex-col w-full bg-white py-24 px-52 space-y-4"
      >
        <div className="flex flex-row w-full space-y-4 items-center">
          <span className="text-black gideon text-3xl w-1/2">
            I can help you with
          </span>
        </div>
        <div className="flex flex-col w-full space-y-10">
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
            icon={<FaCloud />}
            title="Cloud Engineering"
            description="From deploying applications to managing cloud infrastructure, I
              can help you leverage cloud services for maximum performance and
              reliability."
            tools="Amazon Web Services (AWS), API Gateway, Lambda, S3 Bucket, Cloudfront"
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
        className="flex flex-row w-full bg-beige py-24 px-52 space-x-10"
      >
        <div className="text-black text-3xl gideon">Featured Works</div>
      </div>
    </div>
  );
};

export default Home;
