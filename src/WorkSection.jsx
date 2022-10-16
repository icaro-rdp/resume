export default function WorkSection() {
  const WorkExperiences = [
    {
      jobTitle: "Frontend developer",
      company: "Oaks srl",
      date: "2020 - 2022",
      description: `<p>Determined job priorities for multiple projects and      communicated them with the team.
Participated in pre-project analysis and technical assessments to ensure the creation of a user-friendly interface.
Redesigned sites to enhance navigation and improve visual appeal.
Handled projects designated by the senior developer.
Studied the best solution to implement data visualization in a dashboard project.
Experience with sturctured work plans ex. agile SCRUM.
Developed back-end and Front-end structure for data analysis dashboards.
Worked with most common social web API.
  </p>`,
    },
    {
      jobTitle: "Microsoft Dynamics consultant ",
      company: "Oaks srl",
      date: "2019 - 2020",
      description: `<p> Collaborated with bank business unit team to design new applications system to enhance client requirements.
Prepared detailed reports on updates to project specifications, progress, identified conflicts and team activities.
Implemented and tested enhancement feature requests to improve product functionality and extend performance.
Translated old bank workflows into new ones inside the CRM platform.
Collaborated with back-end developers to integrate old and new functionalities.
</p>`,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-start">
        <h3 className="text-xl mb-8 ">WORK EXPERIENCE</h3>
        <ul>
          {WorkExperiences.map((item, index) => (
            <li className="mb-4" key={index}>
              <div className="flex flex-col gap-1">
                <div className="relative font-semibold uppercase">
                  <p className=" animate-pulse absolute h-3 top-1/4 -left-[2.4rem] aspect-square bg-slate-400 rounded-full"></p>
                  {item.jobTitle}
                </div>
                <p className="font-normal capitalize">{item.company}</p>
                <p className="font-thin">{item.date}</p>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
