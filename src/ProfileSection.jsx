export default function ProfileSection({ language }) {
  const profile = [
    {
      title: "Profile",
      content: `<p>
        <b>Frontend</b> developer with a <b>strong passion</b> for web
        technologies,
        <b>UX design</b>, cognitive science and data visualization. I have also
        a background in Microsoft Dynamics CRM development, small project
        management and consultancy for companies. Highly poised and dedicated,
        with good education in design principles and programming languages.
        Looking for a new challenge in a company where I can
        <b>grow and learn</b> new things.
      </p>`,
    },
    {
      title: "Profilo",
      content: `<p>
        Sviluppatore <b>frontend</b> con una <b>forte passione</b> per le
tecnologie web, <b>UX design</b>, scienza cognitiva e la
visualizzazione dei dati. Ho anche una formazione nello
sviluppo di soluzioni Microsoft Dynamics CRM, nella gestione
di piccoli progetti e nella consulenza per aziende. Sono molto
motivato e dedicato, con una buona formazione in design
principles e linguaggi di programmazione. Alla ricerca di una
nuova sfida in un'azienda dove poter <b>crescere e imparare</b>
      </p>`,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-start">
        <h3 className="uppercase text-xl mb-8 text-gray-500 font-bold">
          {language === "eng" ? profile[0].title : profile[1].title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html:
              language === "eng" ? profile[0].content : profile[1].content,
          }}
        />
      </div>
    </>
  );
}
