import { useRef } from "react";
import Button from "./Buttons";
import html2pdf from "html2pdf.js";
import ProfiletSection from "./ProfileSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import avatar from "./assets/avatar.webp";

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
          className="filter grayscale hover:grayscale-0 transition-all duration-700 ring ring-white h-32 rounded-full"
          alt="logo"
        />
      </div>
      <div className="relative flex min-h-screen flex-col justify-start gap-4 items-center overflow-hidden bg-gray-900 py-6 sm:py-24">
        <div onClick={htmToPdf}>
          <Button />
        </div>
        <div
          ref={elToPrint}
          className="tracking-wider relative bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-5xl sm:rounded-md "
        >
          <div className="mx-auto  grid grid-cols-3 pt-16 pb-8 px-12">
            <h1 className="mb-16 text-5xl font-thin col-span-3 flex gap-8 justify-center ">
              <b>ICARO </b> RE DEPAOLINI
            </h1>
            <h2 className="grid grid-cols-3 col-span-3 mb-8 py-2 text-2xl border-y border-slate-400 font-thin col-span-3    ">
              <p className="col-start-2">FRONTEND DEVELOPER</p>
            </h2>
            <div className=" col-span-1 pr-4">
              <ContactSection />
            </div>
            <div className="col-span-2 border-l border-slate-400 pl-8 ">
              <ProfiletSection />
            </div>
            <div className="col-span-3 my-8 border-b border-slate-400"></div>
            <div className="col-span-1 pr-4">
              <EducationSection />
            </div>
            <div className="col-span-2 border-l border-slate-400 pl-8">
              <WorkSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
