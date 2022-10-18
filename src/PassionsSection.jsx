import brain from "./assets/passions/brain.png";
import book from "./assets/passions/book.svg";
import coding from "./assets/passions/coding.svg";
import gaming from "./assets/passions/mouse.png";
export default function PassionsSection() {
  const passions = [
    {
      name: "Programming",
      description:
        "I love programming, especially web development. I also love learning new technologies of development.",
      icon: coding,
    },
    {
      name: "Cognitive Science and Neuroscience",
      description:
        "I'm fascinated by the human mind and how it works. I'm also interested in the brain and rationality of human beings.",
      icon: brain,
    },

    {
      name: "Esport & Gaming",
      description:
        "I love playing video games, especially FPS. I also love watching esport events",
      icon: gaming,
    },
    {
      name: "Reading",
      description: "I love reading, especially science fiction and filosofy",
      icon: book,
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-start ">
        <h3 className="text-xl  mb-8 text-gray-500 font-bold ">PASSIONS</h3>
        <ul className=" space-y-2 ">
          {passions.map((item, index) => (
            <div key={index}>
              <li className="flex flex-wrap gap-2 items-start   ">
                <div className="w-full flex gap-3">
                  <img
                    src={item.icon}
                    alt={item.name + "passion icon"}
                    className="opacity-30 -ml-[0.125rem] w-5 aspect-square"
                  />
                  <p className=" font-bold text-sm">{item.name}</p>
                </div>
                <p className="pl-8">{item.description}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
