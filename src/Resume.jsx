import { useRef } from "react";
import Button from "./Buttons";
import html2pdf from "html2pdf.js";
import ProfiletSection from "./ProfileSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import avatar from "./assets/avatar.webp";
import SkillsSection from "./SkillsSection";
import PassionsSection from "./PassionsSection";

export default function Resume() {
  const elToPrint = useRef(null);

  const htmToPdf = () => {
    const opt = {
      filename: "Icaro_ReDepaolini_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf(elToPrint.current, opt);
  };
  return (
    <>
      <div
        className="z-50 cursor-pointer  hover:translate-y-2 hover:translate-x-2 transition duration-200 absolute top-8 left-8
       "
      >
        <img
          src={avatar}
          className="filter grayscale hover:grayscale-0 transition-all duration-700 ring ring-white  h-24 lg:h-32 rounded-full"
          alt="logo"
        />
      </div>
      <div className="px-8 relative flex min-h-screen flex-col justify-start gap-4 items-center overflow-hidden bg-gray-900 py-6 sm:py-24">
        <div onClick={htmToPdf}>
          <Button />
        </div>
        <div
          ref={elToPrint}
          className="px-8 tracking-wider relative bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-md overflow-hidden "
        >
          <div className="relative mx-auto  grid grid-cols-3 pt-16 pb-8 px-12">
            <h1 className="mb-16 text-5xl font-thin col-span-3 flex gap-8 justify-center ">
              <b>ICARO </b> <p className="text-gray-500">RE DEPAOLINI</p>
            </h1>
            <h2 className="grid grid-cols-3 col-span-3 mb-8 py-2 text-2xl border-y border-slate-400 font-thin col-span-3    ">
              <p className="col-start-2 col-end-[-1] ">FRONTEND DEVELOPER</p>
            </h2>
            <div className=" col-span-1 pr-8">
              <ContactSection />
            </div>
            <div className="col-span-2 border-l border-slate-400 pl-8 ">
              <ProfiletSection />
            </div>
            <div className="col-span-3 my-8 border-b border-slate-400"></div>
            <div className="grid col-span-3 grid-cols-3 grid-row-3">
              <div className="col-span-1 pr-8 row-span-1">
                <EducationSection />
              </div>
              <div className="col-span-2 row-span-3 border-l border-slate-400 pl-8 space-y-8">
                <WorkSection />

                <PassionsSection />
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
