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

export default function Resume() {
  const elToPrint = useRef(null);
  const [language, setLanguage] = useState("eng");
  function changeLanguage(type) {
    setLanguage(type);
  }

  return (
    <>
      <div
        className="z-50 cursor-pointer  hover:translate-y-2 hover:translate-x-2 transition duration-200 absolute top-8 left-8
       "
      ></div>
      <div className="px-8 relative flex min-h-screen flex-col justify-start gap-4 items-center overflow-hidden bg-gray-900 py-6 sm:py-24">
        <div className="animate-fade-in-down flex gap-4 items-center ">
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
          <img
            src={language === "eng" ? eng : ita}
            className=" animate-grayscale-in-down -translate-x-28 -translate-y-12 border-b border-gray-400 -rotate-45 absolute h-24 lg:h-32"
            alt=""
          />
          <div className="relative mx-auto  grid grid-cols-3 pt-16 pb-16 px-12">
            <h1 className=" tracking-[1.5rem] text-5xl font-thin col-span-3 flex gap-8 justify-center ">
              <b>ICARO </b> <p className="text-gray-500">RE DEPAOLINI</p>
            </h1>
            <h2 className="mt-8 grid grid-cols-3 col-span-3 mb-8 py-2 pb-8 text-xl border-b border-slate-400 font-thin col-span-3    ">
              <p className="col-start-2 col-end-[-1] ">FRONTEND DEVELOPER</p>
            </h2>
            <div className=" col-span-1 pr-8">
              <ContactSection language={language} />
            </div>
            <div className="col-span-2 border-l border-slate-400 pl-8 ">
              <ProfileSection language={language} />
            </div>
            <div className="col-span-3 my-8 border-b border-slate-400"></div>
            <div className="grid col-span-3 grid-cols-3 grid-row-3">
              <div className="col-span-1 pr-8 row-span-1">
                <EducationSection language={language} />
              </div>
              <div className="col-span-2 row-span-3 border-l border-slate-400 pl-8 space-y-8">
                <WorkSection language={language} />

                {/* <PassionsSection /> */}
              </div>
              <div className="col-span-1 row-start-2">
                <SkillsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
