export default function EducationSection() {
  const University = [
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
  ];

  return (
    <>
      <div className="flex flex-col justify-start ">
        <h3 className="text-xl mb-8 text-gray-500 font-bold">EDUCATION</h3>
        <ul>
          {University.map((item, index) => (
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
