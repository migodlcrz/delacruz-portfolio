import profile from "../assets/profile.jpg";
import WorkTag from "../components/WorkTag";
import CertificationTag from "../components/CertificationTag";
import EducationTag from "../components/EducationTag";
import { FaJava, FaPython } from "react-icons/fa";
import { SiCisco } from "react-icons/si";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white lg:flex-row space-x-4 lg:py-24 lg:px-52">
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
            <button className="border-[0.5px] border-gray-400 py-2 px-5 rounded-full poppins text-black">
              Contact Me
            </button>
            <button className="border-[0.5px] border-black py-2 px-5 rounded-full poppins text-white bg-black">
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full bg-beige py-24 px-52 space-x-10">
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
      <div className="flex flex-row w-full bg-beige py-24 px-52">
        <div className="flex flex-col w-1/2 space-y-4">
          <span className="text-black gideon text-3xl">I can offer you</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
