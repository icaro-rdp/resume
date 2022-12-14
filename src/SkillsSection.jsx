export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      level: 90,
      date: "2020 - now",
    },
    {
      name: "CSS",
      level: 90,
      date: "2020 - now",
    },
    {
      name: "Javascript",
      level: 60,
      date: "2020 - now",
    },
    {
      name: "Typescript",
      level: 60,
      date: "2020 - now",
    },
    {
      name: "React",
      level: 60,
      date: "2022 - now",
    },
    {
      name: "Angular",
      level: 70,
      date: "2020 - now",
    },
    {
      name: "Rxjs",
      level: 50,
      date: "2020 - now",
    },
    {
      name: "Laravel",
      level: 50,
      date: "2020 - 2021",
    },
    {
      name: "D365",
      level: 70,
      date: "2020 - now",
    },
    {
      name: "Figma",
      level: 30,
      date: "2022 - now",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-start mr-8">
        <h3 className="text-xl mb-8 text-gray-500 font-bold">SKILLS</h3>
        <div className="space-y-4 ">
          {skills
            .sort((a, b) => b.level - a.level)
            .map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="pl-6 flex items-center justify-start gap-4 relative before:content-[''] before:block before:h-3 before:w-3 before:bg-gray-400 before:rounded-full before:absolute before:top-1 before:left-0">
                  {item.name}
                </div>
                <div className="relative h-2 shadow-xl bg-gray-100 rounded-full w-1/3 ">
                  <div
                    className="absolute h-2 shadow-xl bg-gray-300 rounded-full"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
