import { motion } from "framer-motion";

const events = [
    {
        title: "Eesti Rammumees ja Rammunaine 2025 Mehed ja naised avatud klass - Tarmo Haua pildid",
        link: "https://photos.google.com/share/AF1QipOFwE6APx6IHzIZcdGlrdhWtmkmmV5DF1MWFonuxATpIkA0PDcl1FO7WYmFIC6zZg?key=ZGVQN1BscnE0RWVzcVJINEphYlNndlloVmpCQjdn",
      },
    {
        title: "Eesti Rammumees ja Rammunaine 2025 (U23) ja (U105) - Tarmo Haua pildid",
        link: "https://photos.google.com/share/AF1QipMn3kRJ2bMy-fYvuZo18YTrFD3Eqlf6tJx-dNSaQD9NTI3xMRuAxtSYehyxvuNQcQ?key=cEp1bFhWaEdlb1Q2eThPbnIxR2xTOFdBRndKaVhR",
      },
  {
    title: "Eesti Rammumees ja Rammunaine 2024 - Tarmo Haua pildid",
    link: "https://photos.google.com/share/AF1QipMDe2Y6ykvpAm2xw2fq6AnrYPUuAPIOCYVjE9o5HpDFdlOMQ1gI1abz6Lnnq4qSug?key=M0pFdVVGalNlcjdESzMwbkg4eTQwVGZwOWIzUW9n",
  },
  {
    title: "Eesti Rammumees ja Rammunaine 2024 - Urmo Paju pildid",
    link: "https://photos.google.com/share/AF1QipNKdl3rffQjyBlUJzLq7T69oXb0_9SchsK1Bvv6FMtGUEOnGu9_e9DtCUqNuLMNTw?key=U3V2cDRnRGFBWF85dXdWU0daaGtvQ3JsQTRoSk53",
  },
  {
    title: "EMV Palgi surumises 2024 pildid",
    link: "https://photos.google.com/share/AF1QipMksNyMk9uJwawlRGqKh77lq5mfERUjGBIINRQ629Qr3QxMD4Ac21oLhdmCgyS11w?key=OUY2NXBOcUtWT25tTDBMTmp6YTJ6TmpZcWJBN2xR",
  },
  {
    title: "Maamehe Ramm 2024 pildid",
    link: "https://photos.google.com/share/AF1QipOhI9-9SgdGPGOnPeNI2nSb0iDemsbrXPNPLQIG06o_zym5I48yqGQP5KzpDHklqw?key=LVM3UVhaeVNTRTEtMEdnZ2hWYWVMYjVfTmpscXN3",
  },
  {
    title: "Tartu Rammumees ja Rammunaine 2023 pildid",
    link: "https://photos.google.com/share/AF1QipMTAg9R5M-TeY6TQOqXL6j1zFgBUwMFnFL5wrrpskDlU5br7WmcnSZBRrCo2b4ROQ?key=ZGZPX1dITW1Xa2VVRnhYS2tkdDhoZ1NwUmwwZ3Rn",
  },
  {
    title: "Palgi surumise EMV 2022 pildid",
    link: "https://photos.google.com/share/AF1QipMVU6wKoVIY8c9ztYTr9I83yKqQYSyKF5ngLUl_cNeo1BJ-FkdGPC7k--9Bb6rPHQ?key=MWN4cjFLRkxqYXN3LUNLUFVHaVZfR0dYanAzZmhB",
  },
  {
    title: "Viljandi Rammumees 2022 pildid",
    link: "https://photos.google.com/share/AF1QipNkInQqAYqCCCG-OneSvHsKPcuyWcUP4K1lkfu2IzNewhQF0X9X2z6pBdBu1W6JaQ?key=MWtxSzdiVGtGRUpGVnI2dnU1UFNmQXNhMk5aRE9B",
  },
];

const Pictures = () => {
    return (
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Galerii
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Sirvi pilte meie treeningutest ja üritustest.
          </p>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => (
              <motion.a
                key={idx}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-center text-center bg-gray-50 rounded-2xl shadow-md p-8 cursor-pointer hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {event.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pictures;
