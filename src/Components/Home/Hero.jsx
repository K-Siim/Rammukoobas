import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black px-6 
  pt-4 sm:pt-12 md:pt-16 lg:pt-20 pb-10">

      <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/30 via-white to-gray-300/20 animate-pulse opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          MTÜ Rammuklubi 
        </h1>

        <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
          <p className="text-gray-800">
            MTÜ Rammuklubi loodi 2021 aastal eesmärgiga tuua kokku jõutõstmise ja
            rammualade inimesed Tartus ja lähiümbruses ning luua klubi liikmetele
            spetsiaalne treeningruum, mis on täna tuntud kui Rammukoobas.
          </p>

          <p className="text-gray-700">
            Aktiivsemad klubi liikmed korraldavad võistlusi ja treeningpäevi
            Rammukoopas. Nendest üritustest leiab infot meie Facebooki ja Instagrammi
            leheküljelt. Samuti käivad klubi liikmed ise võistlemas nii Eestis kui
            välisriikides.
          </p>

          <p className="text-gray-600">
            Läbi oma tegevuse tahame anda panuse jõu- ja rammuspordi kasvu ning
            levikusse Eestis. Klubi toimib tänu liikmete toetustele ja annetustele.
            Rammukoopa sisustuse ja inventari on klubi liikmed ise hankinud või on
            saadud see läbi toetajate. Selle eest ütleme:{" "}
            <span className="font-bold text-black">"AITÄH!"</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
