import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { IoCall, IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactModal = () => {
  return (
    <dialog id="contact_modal" className="modal">
      <div className="flex flex-col items-center justify-center p-4 bg-beige rounded-3xl">
        <span className="flex w-full justify-end">
          <form method="dialog">
            <button className="text-black text-3xl cursor-pointer hover:text-gray-500 transition-colors duration-300">
              <IoClose />
            </button>
          </form>
        </span>
        <div className="flex flex-col items-center justify-center space-y-6 w-full px-10 pb-10">
          <span className="text-black text-3xl gideon">Contact Me</span>
          <div className="flex flex-col w-full space-y-1 justify-start text-gray-700">
            <span className="flex flex-row space-x-2 items-center">
              <div>
                <IoCall />
              </div>
              <div>+639934116567/9664580566</div>
            </span>
            <span className="flex flex-row space-x-2 items-center">
              <div>
                <MdEmail />
              </div>
              <div>lorenzo.cap.delacruz@gmail.com</div>
            </span>
            <span className="flex flex-row space-x-2 items-center">
              <div>
                <FaLocationDot />
              </div>
              <div>Manila, Philippines</div>
            </span>
          </div>
          <div className="border-b-[0.5px] border-gray-300" />
          <div className="flex flex-col w-full space-y-1 justify-center text-gray-700">
            <span className="flex flex-row space-x-2 items-center">
              <div>
                <FaGithub />
              </div>
              <div>github.com/migodlcrz</div>
            </span>
            <span className="flex flex-row space-x-2 items-center">
              <div>
                <FaLinkedin />
              </div>
              <div>linkedin.com/in/lorenzo-miguel-dela-cruz</div>
            </span>
            <span className="flex flex-row space-x-2 items-center">
              <div>
                <FaFacebook />
              </div>
              <div>facebook.com/migodlcrz/</div>
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ContactModal;
