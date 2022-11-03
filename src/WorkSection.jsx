export default function WorkSection({ language }) {
  const WorkExperiences = [
    {
      jobTitle: "Frontend developer",
      jobTitle_ita: "Frontend developer",
      company: "Oaks srl",
      date: "2020 - 2022",
      description: `<p>I worked for two years as a <b>rontend developer</b> in enterprise projects for a large international distribution company, mainly using <b>Angular</b> (v13+), HTML, CSS (Tailwind and Sass),
      Typescript and for small projects <b>React</b> (v16+) and Laravel
      (v7+). Determined job priorities for multiple projects and
      communicated them with the team. Participated in pre-project
      analysis and technical assessments to ensure the creation of
      a user-centric interface. Redesigned sites to <b>enhance
      navigation</b> and improve visual appeal. Studied the best
      solution to implement data visualization with a strong
      <b>collaboration</b> with design teams. 
       </p>`,
      description_ita: `<p>Ho lavorato per due anni come <b>sviluppatore frontend</b> in progetti entreprise per una grande azienda della distribuzione internazionale, utilizzando principalmente <b>Angular</b> (v13/v14),HTML, CSS (Tailwind e Sass), Typescript e per piccoli progetti,
      <b>React</b> (v16+) e Laravel (v8+). Ho determinato le priorità di lavoro per più progetti e le ho
      comunicate al team. Ho partecipato all'analisi pre-progetto e
      alle valutazioni tecniche per garantire la creazione di
      un'interfaccia incentrata sull'utente. Ho ridisegnato i siti per
      <b>migliorare la navigazione</b> e l'aspetto visivo. Ho studiato la
      soluzione migliore per implementare la <b>visualizzazione dei
      dati</b> con una forte <b>collaborazione</b> con i team di design.
      </p>`,
    },
    {
      jobTitle: "Microsoft Dynamics consultant ",
      jobTitle_ita: "Consulente Microsoft Dynamics",
      company: "Oaks srl",
      date: "2019 - 2020",
      description: `<p> Collaborated with bank business unit team to design new applications system in Dynamics 365 to <b>enhance client requirements</b>.
      Prepared detailed reports on updates to project specifications, progress, identified conflicts and team activities.
      <b>Implemented and tested</b> enhancement feature requests to improve product functionality and extend performance.
      Translated old bank workflows into new ones inside the CRM platform.
      Collaborated and implemented the <b>new features</b> with the back-end developers.
      </p>`,
      description_ita: `<p> Ho collaborato con il team della business unit bancaria per progettare un nuovo sistema di applicazioni in Dynamics 365 per <b>migliorare i requisiti</b> del cliente. Ho preparato rapporti dettagliati sugli aggiornamenti delle specifiche del progetto, sui progressi, sui
      conflitti identificati e sulle attività del team. <b>Implementato e
      testato</b> le richieste di potenziamento per migliorare la
      funzionalità del prodotto ed estenderne le prestazioni. Ho
      tradotto i vecchi flussi di lavoro bancari in nuovi flussi di
      lavoro all'interno della piattaforma CRM. Ho collaborato e
      implementato le <b>nuove funzionalità</b> con gli sviluppatori di
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
