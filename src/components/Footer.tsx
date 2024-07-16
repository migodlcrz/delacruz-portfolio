import profile from "../assets/profile.jpg";
const Footer = () => {
  return (
    <div className="flex flex-col w-full h-96 bg-black px-40 py-5">
      <div className="flex flex-col w-full h-full text-center items-center justify-center space-y-12">
        <div className="flex flex-col space-y-4">
          <span className="text-beige text-xl gideon">Have an idea?</span>
          <span className="text-beige text-5xl poppins-bold">
            Let's talk with me
          </span>
        </div>
        <button className="bg-beige px-5 py-2 rounded-full">
          <span className="text-black poppins">Contact Me</span>
        </button>
      </div>
      <div className="flex flex-row w-full px-18 justify-between">
        <div className="flex flex-row space-x-10 items-center justify-center">
          <div className="flex flex-row space-x-3 items-center justify-center">
            <img src={profile} alt="" className="h-8 w-8 rounded-xl" />
            <span className="text-beige poppins-bold">LMDC</span>
          </div>
          <span className="text-beige poppins">Software Engineer</span>
        </div>
        <div className="flex flex-row justify-between space-x-36">
          <span className="text-beige poppins">Home</span>
          <span className="text-beige poppins">Services</span>
          <span className="text-beige poppins">About Me</span>
          <span className="text-beige poppins">Projects</span>
        </div>
      </div>
      {/* <div className="flex flex-row space-x-5">
        <img src={profile} alt="" className="rounded-2xl" />
        <div className="flex flex-col">
          <span className="text-beige text-2xl gideon">
            I'm Lorenzo Miguel Dela Cruz
          </span>
          <span className="text-beige text-base poppins">
            An aspiring Software Engineer based
            <br /> in Manila, Philippines
          </span>
        </div>
        <div className="flex flex-row"></div>
      </div> */}
    </div>
  );
};

export default Footer;
