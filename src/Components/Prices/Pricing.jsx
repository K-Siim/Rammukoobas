import { motion } from "framer-motion";

const priceCards = [
  {
    title: "TÕSINE RAMMUKARU",
    description: "24/7 ligipääs ÄPIGA – ainult kõige motiveeritumad, kes elavad jõusaalis!",
    price: "€50.00",
    image: "/tosine.svg",
  },
  {
    title: "NOOR KARU",
    description: "24/7 ligipääs ÄPIGA (13–18a) – kasvav jõud, tugev algus.",
    price: "€25.00",
    image: "/noor.svg",
  },
  {
    title: "ÜHISKARU",
    description: "1x nädalas ligipääs ÄPIGA (ühistrennid) – koos on alati lõbusam rammu koguda.",
    price: "€25.00",
    image: "/yhis.svg",
  },
  {
    title: "KARUPERE LIIGE",
    description: "Klubi moraalne toetaja, kes aitab ning toetab meid igas olukorras.",
    price: "€20.00",
    image: "/image0.png",
  },
  {
    title: "RÄNDKARU",
    description: "Ühekordne ligipääs – võimalus proovida või treenida sobival ajal.",
    price: "€5.00",
    image: "/rand.svg",
  },
  {
    title: "MÕMMIK",
    description: "13a ja nooremad tasuta (vanemlik järelvalve vajalik) – esimene samm rammu poole.",
    price: "€0.00",
    image: "/alge.svg",
  },
];

const Prices = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Hinnakiri</h1>

        <div className="flex flex-col gap-6">
          {priceCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 cursor-pointer"
            >
              {/* Vasak pool - pilt */}
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Parem pool - tekst */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{card.description}</p>
                <span className="text-lg font-bold text-gray-900">{card.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
