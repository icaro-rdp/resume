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
        <h3 className="text-xl mb-8 text-gray-500 font-bold">EXPERIENCES</h3>
        <ul>
          {WorkExperiences.map((item, index) => (
            <li className="mb-8" key={index}>
              <div className="flex flex-col gap-1">
                <div className=" before:content-[''] before:block before:h-3 before:w-3 before:bg-gray-400 before:rounded-full before:absolute relative before:top-1 before:-left-[2.45rem] font-semibold uppercase">
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
