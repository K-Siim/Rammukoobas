import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MerchCard = () => {
  const products = [
    {
      id: 1,
      name: "T-särk MEESTE",
      brand: "MALFINI",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      clubPrice: 20,
      regularPrice: 25,
      images: ["/T-M-E.jpg", "/T-M-T.jpg"]
    },
    {
      id: 2,
      name: "T-särk NAISTE",
      brand: "MALFINI",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      clubPrice: 20,
      regularPrice: 25,
      images: ["/T-N-E.jpg", "/T-N-T.jpg"]
    },
    {
      id: 3,
      name: "Dress women's KLEIT",
      brand: "Premium",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      clubPrice: 55,
      regularPrice: 65,
      images: ["/KLEIT-E.jpg"]
    },
    {
      id: 4,
      name: "PUSA KAPUUTSI JA LUKUGA",
      brand: "Premium",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      clubPrice: 45,
      regularPrice: 55,
      images: ["/PUSA-LUKUGA-E.jpg", "/PUSA-LUKUGA-T.jpg", "/PUSA-LUKUGA-K.jpg"]
    },
    {
      id: 5,
      name: "PUSA KAPUUTSIGA",
      brand: "Premium",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      clubPrice: 45,
      regularPrice: 55,
      images: ["/PUSA-ULEPEA-E.jpg", "/PUSA-ULEPEA-T.jpg"]
    },
    {
      id: 7,
      name: "LÜHIKESED PÜKSID",
      brand: "MALFINI",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      clubPrice: 20,
      regularPrice: 30,
      images: ["/LUHKA-LOGO-ALL.jpg", "/LUHKA-LOGO-ULEVAL.jpg"]
    },
    {
      id: 6,
      name: "PIKAD PÜKSID",
      brand: "Premium",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      clubPrice: 40,
      regularPrice: 50,
      images: ["/ram-pikadpuksid.jpg"]
    },
    {
      id: 8,
      name: "T-särk MEESTE B&C E190",
      brand: "B&C",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      clubPrice: 15,
      regularPrice: 20,
      images: ["/T-M-E.jpg"]
    },
    {
      id: 9,
      name: "NOKAMÜTS",
      brand: "Premium",
      sizes: ["S", "M", "L", "XL", "2XL"],
      clubPrice: 25,
      regularPrice: 35,
      images: ["/NOKATS-E.jpg", "/NOKATS-T.jpg"]
    },
    {
      id: 10,
      name: "NOKAMÜTS VÕRGUGA",
      brand: "Premium",
      sizes: ["S", "M", "L", "XL", "2XL"],
      clubPrice: 25,
      regularPrice: 35,
      images: ["/ram-vorguga-nokats.jpg"]
    }
  ];

  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex(prev => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1);
    };

    useEffect(() => {
      let interval;
      if (isHovered && product.images.length > 1) {
        interval = setInterval(() => {
          setCurrentImageIndex(prev => (prev + 1) % product.images.length);
        }, 2000);
      }
      return () => clearInterval(interval);
    }, [isHovered, product.images.length]);

    return (
      <div 
        className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onLoad={() => console.log('Image loaded:', product.images[currentImageIndex])}
            onError={(e) => {
              console.error('Image failed to load:', product.images[currentImageIndex]);
              console.error('Error details:', e);
            }}
          />
          
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 text-gray-900" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 text-gray-900" />
              </button>
            </>
          )}

          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white shadow-lg scale-125' 
                      : 'bg-white bg-opacity-60 hover:bg-opacity-80 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-gray-900">{product.clubPrice}€</div>
              <div className="text-sm text-gray-500">Rammuklubi</div>
              <div className="text-lg font-semibold text-gray-700 mt-1">{product.regularPrice}€</div>
              <div className="text-xs text-gray-500">Tavaind</div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-xs font-bold text-gray-700 mb-3 tracking-wide">SAADAVAL SUURUSED</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <span 
                  key={size} 
                  className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg font-medium transition-all duration-200 cursor-default"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

     
          {product.images.length > 1 && (
            <div className="mt-4 text-center">
              <span className="text-xs text-gray-500">
                {currentImageIndex + 1} / {product.images.length} pilti
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MerchCard;