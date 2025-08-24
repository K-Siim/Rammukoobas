import React, { useState } from 'react';

const MembersPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  
  const members = [
    {
      id: 1,
      name: "Tiit Kallavus",
      description: "Rammukoopa looja",
      image: "/tiit.jpg",
      coach: "Rauno Heinla",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2023 - Palgi surumise Eesti meister",
        "2024 - Palgi surumise Eesti meister",
        "2024 - EMV 2 koht",
        "2024 - SCL U130 maailmameister",
        "2025 - EMV 1 koht"
      ]
    },
    {
      id: 2,
      name: "Markus Tank",
      description: "Tulevikulootus ja paljude Eesti rekordite omanik",
      image: "/Tank.jpg",
      coach: "Rauno Heinla",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2023 - EMV 2 koht",
        "2023 - Palgi surumise Eesti meister",
        "2024 - EMV 1 koht",
        "2024 - Pärnu rammumees 2 koht",
        "2025 - Hollandi strongman 2 koht",
        "2025 - EMV 1 koht"
      ]
    },
    {
      id: 3,
      name: "Kalev Mettus",
      description: "Kalev teeb klubi sotsiaalmeedia kontenti ja tema kaudu on paljud tee Rammukoopasse leidnud",
      image: "/Kalev.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2023 - Palgi surumise 3 koht",
        "2024 - Palgi surumise 2 koht",
        "2025 - EMV 2 koht"
      ]
    }
  ];

  const handleCardClick = (memberId) => {
    setFlippedCard(flippedCard === memberId ? null : memberId);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-800/30"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/3 via-transparent to-gray-300/3 animate-pulse"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20 space-y-8">
            <div className="relative inline-block">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-widest drop-shadow-2xl">
                EESTI
              </h1>
              <div className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl font-black text-white/5 blur-2xl animate-pulse">
                EESTI
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="h-3 w-48 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse shadow-lg shadow-white/40"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-100 tracking-wider mb-4">
              JÕUMEHED
            </h2>
            
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Eesti parimad jõumehed, kelle võimsus ja tahe on tõestanud, et väikesest rahvast võivad tulla maailma tugevaimad mehed. 
              Kliki kaardil, et näha nende suurimaid saavutusi.
            </p>
          </div>

          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
            {members.map((member) => (
              <div
                key={member.id}
                className="group relative h-96 cursor-pointer perspective-1000 mb-8"
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(member.id)}
              >
                
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-gray-300/20 to-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                
                
                <div className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${
                  flippedCard === member.id ? 'rotate-y-180' : ''
                }`}>
                  
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative bg-gray-900/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/60 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-white/10 flex">
                      
                      
                      <div className="relative w-2/5 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60"></div>
                        
                        
                        <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm font-bold border border-white/20">
                          {member.nationality}
                        </div>
                        
                        
                        <div className="absolute bottom-4 left-4 bg-white/95 text-black px-4 py-2 rounded-lg text-sm font-black shadow-xl">
                          Treener: {member.coach}
                        </div>
                      </div>

                      
                      <div className="w-3/5 p-6 flex flex-col justify-between">
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">
                            {member.name}
                          </h3>
                          
                          <p className="text-gray-300 leading-relaxed text-base">
                            {member.description}
                          </p>
                        </div>

                        
                        <div className="flex justify-end items-center pt-4">
                          <div className={`transform transition-all duration-500 ${
                            hoveredCard === member.id 
                              ? 'opacity-100 translate-x-0 scale-105' 
                              : 'opacity-0 translate-x-6'
                          }`}>
                            <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-black text-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl border border-gray-300">
                              Parimad saavutused
                            </button>
                          </div>
                        </div>
                      </div>

                      
                      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                        hoveredCard === member.id 
                          ? 'border-2 border-white/80 shadow-2xl shadow-white/20' 
                          : 'border border-gray-700/30'
                      }`}></div>
                    </div>
                  </div>

                  
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative bg-gray-800/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-600/60 h-full p-6 flex flex-col">
                      
                      
                      <div className="text-center mb-4 pb-4 border-b border-gray-600/50 flex-shrink-0">
                        <h3 className="text-xl font-black text-white mb-2">{member.name}</h3>
                        <p className="text-gray-300 font-bold text-sm">PARIMAD SAAVUTUSED</p>
                      </div>

                      
                      <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                        {member.achievements.map((achievement, index) => (
                          <div 
                            key={index}
                            className="flex items-start space-x-3 p-2.5 bg-gray-900/60 rounded-lg border border-gray-700/40 hover:border-white/20 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-5 h-5 bg-white rounded-full flex items-center justify-center mt-0.5">
                              <span className="text-black font-black text-xs">{index + 1}</span>
                            </div>
                            <p className="text-gray-200 text-sm leading-relaxed font-medium">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>

                      
                      <div className="text-center flex-shrink-0">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlippedCard(null);
                          }}
                          className="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-lg font-black text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                        >
                          Tagasi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          
          
        </div>
      </div>

      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
          background-color: rgb(75 85 99);
          border-radius: 4px;
        }
        .scrollbar-track-gray-800::-webkit-scrollbar-track {
          background-color: rgb(31 41 55);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
      `}</style>
    </div>
  );
};

export default MembersPage;