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
      name: "Janary Kask",
      description: "Tulevikulootus, distantsile vaatamata on tähtis osa meie seltskonnast",
      image: "/janary.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2023 - EMV 1 koht",
        "2024 - Palgi surumise 2 koht",
        "2024 - Pärnu rammumees võitja",
        "2024 - EMV 2 koht",
        "2025 - Hollandi strongman 1 koht",
        "2025 - EMV Open klassis 3 koht"
      ]
    },
    {
      id: 4,
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
    },
    {
      id: 5,
      name: "Henry Rosin",
      description: "Rammukoopa logo ja disaini looja. Kõige raskem Rammukoopa rammumees",
      image: "/henry.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2025 - Rahva rammumees 2 koht",
        "2025 - EMV 3 koht"
      ]
    },
    {
      id: 6,
      name: "Cäroly Paatsi",
      description: "Esimene ja hetkel ainuke õrnema soo esindaja. Lootustandev rammunaine",
      image: "/caroly.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2025 - Rahva rammunaine võitja",
        "2025 - Pärnu rammunaine 2 koht",
        "2025 - Maamehe ramm 2 koht"
      ]
    },
    {
      id: 7,
      name: "Enrike Eensalu",
      description: "Ainuke diagnoosiga Rammukoopa rammumees. 2020 aastal diagnoositi psühhootiline häire skisofreenia sümptomitega. Enrike on ehe näide, et rasked ajad ei takista trenni tegemist ja on meie klubi värvikas liige",
      image: "/enrike.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2024 - Palgi surumise 4 koht"
      ]
    },
    {
      id: 8,
      name: "Kaspar Narits",
      description: "Klubi kehatohter, massöör ja tulevikus ka treener?",
      image: "/kaspar_narits.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2024 - Jõuspordi sarja võitja"
      ]
    },
    {
      id: 9,
      name: "Hendrik Hiiemäe",
      description: "Tulevikulootus",
      image: "/hendrik.jpg",
      coach: "Rauno Heinla",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2025 - EMV 4 koht"
      ]
    },
    {
      id: 10,
      name: "Kaspar Raudsepp",
      description: "Tulevikulootus",
      image: "/kaspar_raudsepp.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2025 - Rahva rammumees võitja"
      ]
    },
    {
      id: 11,
      name: "Veiko Tikker",
      description: "Ainuke Rammukoopa liige, kes sõidab tsikliga",
      image: "/veiko.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "2025 - Rahva rammumees 4 koht"
      ]
    },
    {
      id: 12,
      name: "Marcus Paulson",
      description: "Haardevõlur",
      image: "/marcus.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: [
        "Golden Grip haarde maailmarekodi omanik"
      ]
    },
    {
      id: 13,
      name: "Rihard Laksaar",
      description: "Pesamuna",
      image: "/rihard.jpg",
      coach: "Treenib iseseisvalt",
      nationality: "🇪🇪 Eesti",
      achievements: []
    }
  ];

  const handleCardClick = (memberId) => {
    setFlippedCard(flippedCard === memberId ? null : memberId);
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 space-y-8">
          <div className="relative inline-block">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent tracking-widest drop-shadow-2xl">
              EESTI
            </h1>
            <div className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl font-black text-gray-900/5 blur-2xl animate-pulse">
              EESTI
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="h-3 w-48 bg-gradient-to-r from-transparent via-gray-900 to-transparent rounded-full animate-pulse shadow-lg shadow-gray-900/40"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-wider mb-4">
            JÕUMEHED
          </h2>
          
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Eesti parimad jõumehed, kelle võimsus ja tahe on tõestanud, et väikesest rahvast võivad tulla maailma tugevaimad mehed. 
            Kliki kaardil, et näha nende suurimaid saavutusi.
          </p>
        </div>

        
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative h-96 cursor-pointer mb-8"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(member.id)}
              style={{ perspective: '1000px' }}
            >
              
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-900/20 via-gray-600/20 to-gray-900/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              
              <div 
                className="relative w-full h-full transition-all duration-700 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === member.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  WebkitTransformStyle: 'preserve-3d',
                  WebkitTransform: flippedCard === member.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="relative bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-300/60 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gray-900/10 flex">
                    
                    
                    <div className="relative w-2/5 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-gray-900/60"></div>
                      
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-gray-900 text-sm font-bold border border-gray-900/20">
                        {member.nationality}
                      </div>
                      
                      
                      <div className="absolute bottom-4 left-4 bg-gray-900/95 text-white px-4 py-2 rounded-lg text-sm font-black shadow-xl">
                        Treener: {member.coach}
                      </div>
                    </div>

                    
                    <div className="w-3/5 p-6 flex flex-col justify-between">
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-900 group-hover:bg-clip-text transition-all duration-500">
                          {member.name}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-base">
                          {member.description}
                        </p>
                      </div>

                      
                      <div className="flex justify-end items-center pt-4">
                        <div className={`transform transition-all duration-500 ${
                          hoveredCard === member.id 
                            ? 'opacity-100 translate-x-0 scale-105' 
                            : 'opacity-0 translate-x-6'
                        }`}>
                          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-black text-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl border border-gray-600">
                            Parimad saavutused
                          </button>
                        </div>
                      </div>
                    </div>

                    
                    <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                      hoveredCard === member.id 
                        ? 'border-2 border-gray-900/80 shadow-2xl shadow-gray-900/20' 
                        : 'border border-gray-300/30'
                    }`}></div>
                  </div>
                </div>

                
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    WebkitTransform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative bg-gray-100/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-300/60 h-full p-6 flex flex-col">
                    
                    
                    <div className="text-center mb-6 pb-4 border-b border-gray-400/50">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-gray-700 font-bold">PARIMAD SAAVUTUSED</p>
                    </div>

                    
                    <div className="flex-1 overflow-y-auto space-y-3 mb-6 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                      {member.achievements.length > 0 ? (
                        member.achievements.map((achievement, index) => (
                          <div 
                            key={index}
                            className="flex items-start space-x-3 p-3 bg-white/60 rounded-lg border border-gray-300/40 hover:border-gray-900/20 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                              <span className="text-white font-black text-xs">{index + 1}</span>
                            </div>
                            <p className="text-gray-800 text-sm leading-relaxed font-medium">
                              {achievement}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600 text-sm font-medium">Saavutused lisanduvad peagi!</p>
                        </div>
                      )}
                    </div>

                    
                    <div className="text-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlippedCard(null);
                        }}
                        className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-black text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
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

      
      <style jsx>{`
        /* Remove CSS classes as we're using inline styles for better mobile support */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thumb-gray-400::-webkit-scrollbar-thumb {
          background-color: rgb(156 163 175);
          border-radius: 4px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: rgb(229 231 235);
        }
      `}</style>
    </section>
  );
};

export default MembersPage;