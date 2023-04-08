import { useRef, useState } from "react";
import Button from "./Buttons";
import html2pdf from "html2pdf.js";
import ProfileSection from "./ProfileSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import avatar from "./assets/avatar.webp";
import SkillsSection from "./SkillsSection";
import PassionsSection from "./PassionsSection";
import resume from "./assets/Re_Depaolini_Icaro_Resume.pdf";
import resumeIT from "./assets/Re_Depaolini_Icaro_Resume_IT.pdf";
import ita from "./assets/it.svg";
import eng from "./assets/eng.svg";

// function to detect the language of the browser
const detectLanguage = () => {
  // get param from url if present
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("lang")) {
    return urlParams.get("lang");
  }

  const language = navigator.language;
  if (language === "it-IT" || language === "it") {
    return "ita";
  } else {
    return "eng";
  }
};

export default function Resume() {
  const elToPrint = useRef(null);
  const [language, setLanguage] = useState(detectLanguage());
  function changeLanguage(type) {
    setLanguage(type);
  }

  return (
    <>
      <div
        className="scale-50 z-50 cursor-pointer  hover:translate-y-2 hover:translate-x-2 transition duration-200 absolute top-8 left-8
       "
      ></div>
      <div className="px-8 relative flex min-h-screen flex-col justify-start gap-4 items-center overflow-hidden bg-gray-900 py-6 sm:py-24">
        <img
          src={language === "eng" ? eng : ita}
          className="hidden lg:block ring ring-white fixed top-10 left-10  animate-grayscale-in-down  border-b border-gray-900  absolute h-24 rounded-md"
          alt=""
        />
        <div className="animate-fade-in-down flex gap-4 items-center mb-4 ">
          <a
            download={`Re_Depaolini_icaro_Resume_${language.toUpperCase()}`}
            target="_blank"
            href={language === "eng" ? resume : resumeIT}
          >
            <Button language={language} />
          </a>
          <button
            onClick={() => changeLanguage("ita")}
            className="bg-gray-100 hover:bg-gray-300 h-8 w-10 grid place-items-center rounded-full "
          >
            <img className=" h-4 w-6" src={ita} alt="italian" />
          </button>
          <button
            onClick={() => changeLanguage("eng")}
            className="bg-gray-100 hover:bg-gray-300 h-8 w-10 grid place-items-center rounded-full"
          >
            <img className=" h-4 w-6" src={eng} alt="english" />
          </button>
        </div>

        <div
          ref={elToPrint}
          className="relative px-8 tracking-wider relative bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-md overflow-hidden "
        >
          <div className="relative mx-auto  grid grid-cols-12 pt-16 pb-16 px-12">
            <h1 className=" tracking-[1.5rem] text-2xl md:text-3xl lg:text-5xl font-thin col-span-12 flex flex-col lg:flex-row gap-2 lg:gap-8 justify-center text-center lg:text-left">
              <b>ICARO </b> <p className="text-gray-500">RE DEPAOLINI</p>
            </h1>
            <h2 className="mt-8 flex lg:grid grid-cols-3 col-span-12 mb-8 py-2 pb-8 text-xl border-b border-slate-400 font-thin col-span-3  justify-center">
              <p className="col-start-2 col-end-[-1] ">FRONTEND DEVELOPER</p>
            </h2>
            <div className=" col-span-12 md:col-span-6 lg:col-span-4 pr-0 lg:pr-8 mb-8 md:mb-0">
              <ContactSection language={language} />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 border-t md:border-t-0 md:border-l border-slate-400 pl-0 md:pl-8 pt-8 md:pt-0">
              <ProfileSection language={language} />
            </div>
            <div className="col-span-12 my-8 border-b border-slate-400"></div>
            <div className="grid col-span-12 grid-cols-12 grid-row-3">
              <div className="col-span-12 md:col-span-6 lg:col-span-4 pr-8 row-span-1">
                <EducationSection language={language} />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-8 row-span-3 md:border-l pt-8 md:pt-0 border-t md:border-t-0 border-slate-400 pl-0 md:pl-8 space-y-8">
                <WorkSection language={language} />

                {/* <PassionsSection /> */}
              </div>
              <div className="col-span-12 md:col-span-4 row-start-2 mb-8">
                <SkillsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

