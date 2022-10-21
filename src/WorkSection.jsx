export default function WorkSection({ language }) {
  const WorkExperiences = [
    {
      jobTitle: "Frontend developer",
      jobTitle_ita: "Frontend developer",
      company: "Oaks srl",
      date: "2020 - 2022",
      description: `<p>Determined job priorities for multiple projects and
communicated them with the team. Participated in pre-project
analysis and technical assessments to ensure the creation of
a user-centric interface. Redesigned sites to enhance
navigation and improve visual appeal. Studied the best
solution to implement data visualization with a strong
collaboration with design teams. Implemented frontend
architecture for multiple enterprise projects.
  </p>`,
      description_ita: `<p>Ho determinato le priorità di lavoro per più progetti e le ho
comunicate al team. Ho partecipato all'analisi pre-progetto e
alle valutazioni tecniche per garantire la creazione di
un'interfaccia incentrata sull'utente. Ho ridisegnato i siti per
migliorare la navigazione e l'aspetto visivo. Ho studiato la
soluzione migliore per implementare la visualizzazione dei
dati con una forte collaborazione con i team di design.
Implementato l'architettura frontend per diversi progetti
aziendali.
  </p>`,
    },
    {
      jobTitle: "Microsoft Dynamics consultant ",
      jobTitle_ita: "Consulente Microsoft Dynamics",
      company: "Oaks srl",
      date: "2019 - 2020",
      description: `<p> Collaborated with bank business unit team to design new applications system to enhance client requirements.
Prepared detailed reports on updates to project specifications, progress, identified conflicts and team activities.
Implemented and tested enhancement feature requests to improve product functionality and extend performance.
Translated old bank workflows into new ones inside the CRM platform.
Collaborated with back-end developers to integrate old and new functionalities.
</p>`,
      description_ita: `<p> Ho collaborato con il team della business unit bancaria per
progettare un nuovo sistema di applicazioni per migliorare i
requisiti del cliente. Ho preparato rapporti dettagliati sugli
aggiornamenti delle specifiche del progetto, sui progressi, sui
conflitti identificati e sulle attività del team. Implementato e
testato le richieste di potenziamento per migliorare la
funzionalità del prodotto ed estenderne le prestazioni. Ho
tradotto i vecchi flussi di lavoro bancari in nuovi flussi di
lavoro all'interno della piattaforma CRM. Ho collaborato e
implementato le funzionalità nuove con gli sviluppatori di
back-end.
</p>`,
    },
  ];

  return (
    <>
      <div>
        <h3 className="text-xl mb-8 text-gray-500 font-bold">EXPERIENCES</h3>
        <ul className="flex flex-col gap-8  justify-start">
          {WorkExperiences.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col gap-1">
                <div className=" before:content-[''] before:block before:h-3 before:w-3 before:bg-gray-400 before:rounded-full before:absolute relative before:top-1 before:-left-[2.45rem] font-semibold uppercase">
                  {language === "eng" ? item.jobTitle : item.jobTitle_ita}
                </div>
                <div className="font-normal flex  divide-x-2 capitalize">
                  <p className="pr-2">{item.company}</p>
                  <p className="pl-2">{item.date}</p>
                </div>
                <p className="font-thin"></p>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      language === "eng"
                        ? item.description
                        : item.description_ita,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
