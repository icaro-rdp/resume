import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import linkedin from "./assets/linkedin.svg";
import location from "./assets/location.svg";
import github from "./assets/github.svg";

export default function ContactSection() {
  const underlineClasses = `
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[0.125rem]
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600 
                before:to-slate-400
                hover:before:w-full
                hover:before:opacity-100`;
  return (
    <>
      <div className="flex flex-col justify-start ">
        <h3 className="text-xl mb-8 ">CONTACT</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <div className="relative flex gap-2 font-thin ">
              <img className="h-6 w-6" src={phone} alt="phone" />
              <a
                className="cursor-pointer relative"
                href="callto:+393779965756 "
              >
                <p className={underlineClasses}>
                  <b>+39</b> 3779965756
                </p>
              </a>
            </div>
          </li>
          <li>
            <div className="relative flex gap-2 font-thin ">
              <img className="h-6 w-6" src={email} alt="email" />
              <a
                className="cursor-pointer relative"
                href="mailto:igher97@gmail.com"
              >
                <p className={underlineClasses}>igher97@gmail.com</p>
              </a>
            </div>
          </li>
          <li>
            <div className="relative flex gap-2 font-thin ">
              <img className="h-6 w-6" src={location} alt="location" />
              <a
                className="cursor-pointer relative"
                href="https://goo.gl/maps/jCxsqwTuF6SYbW4T7"
                target="_blank"
              >
                <p className={underlineClasses}>
                  Italy, La Valletta Brianza, 23888
                </p>
              </a>
            </div>
          </li>
          <li>
            <div className="relative flex gap-2 font-thin ">
              <img
                className=" h-5 w-5 ml-[0.125rem] mr-1"
                src={linkedin}
                alt="phone"
              />
              <a
                className="cursor-pointer relative"
                href="https://www.linkedin.com/in/icaro-re-depaolini/"
                target="_blank"
              >
                <p className={underlineClasses}>in/icaro-re-depaolini</p>
              </a>
            </div>
          </li>
          <li>
            <div className="relative flex gap-2 font-thin ">
              <img
                className=" h-5 w-5 ml-[0.125rem] mr-1"
                src={github}
                alt="phone"
              />
              <a
                className="cursor-pointer relative"
                href="https://github.com/icaro-rdp"
                target="_blank"
              >
                <p className={underlineClasses}>github.com/icaro-rdp</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
