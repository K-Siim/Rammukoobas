import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  
  const cards = [
    {
      title: "Liikmed",
      description: "Tutvu meie klubi liikmetega ja nende saavutustega.",
      image: "/rammukoobas.svg",
      path: "/squad"
    },
    {
      title: "Hinnakiri",
      description: "Vaata liikmelisuse ja treeningute hindu.",
      image: "/hinnakirjale.jpg",
      path: "/prices"
    },
    {
      title: "Galerii",
      description: "Sirvi pilte meie treeningutest ja üritustest.",
      image: "/rammukoobas.svg",
      path: "/gallery"
    },
    {
      title: "Merch",
      description: "Osta meie merch.",
      image: "/rammukoobas.svg",
      path: "/merch"
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="pt-5 pb-30 px-6 bg-gray-50 -mt-8">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg w-full"
            onClick={() => handleCardClick(card.path)}
          >
            <div className="w-full h-80 md:h-96 lg:h-100">
              <img
                src={card.image} // nüüd iga kaardi oma pilt
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition duration-500">
                {card.description}
              </p>
            </div>
          </motion.div>
          
        ))}
      </div>
    </section>
  );
}
