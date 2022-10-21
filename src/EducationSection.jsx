export default function EducationSection({ language }) {
  const education = [
    [
      {
        name: "University of Milano Bicocca",
        degree: "Bachelor of Computer science",
        date: "2013 - 2016",
      },
      {
        name: "Istituto superiore vittorio bachelet",
        degree: "High school diploma ",
        date: "2016 - 2020",
      },
    ],

    [
      {
        name: "Università degli studi di Milano Bicocca",
        degree: "Laurea in Informatica",
        date: "2013 - 2016",
      },
      {
        name: "Istituto superiore vittorio bachelet",
        degree: "Diploma di maturità",
        date: "2016 - 2020",
      },
    ],
  ];

  // translate the content of the array
  const translatedObj = language === "eng" ? education[0] : education[1];

  return (
    <>
      <div className="flex flex-col justify-start ">
        <h3 className="text-xl mb-8 text-gray-500 font-bold">
          {language === "eng" ? "EDUCATION" : "ISTRUZIONE"}
        </h3>
        <ul>
          {translatedObj.map((item, index) => (
            <li className="mb-1" key={index}>
              <div className="flex flex-col gap-1">
                <p className="font-semibold uppercase">{item.degree}</p>
                <p className="font-normal capitalize">{item.name}</p>
                <p className="font-thin">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8 w-1/2 block border-b border-gray-400 "></div>
    </>
  );
}
