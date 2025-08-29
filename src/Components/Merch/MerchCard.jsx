import React, { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';

const MerchCard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const products = [
    {
      id: 1,
      name: "T-särk MEESTE",
      brand: "MALFINI",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      price: 18,
      images: ["/T-M-E.jpg", "/T-M-T.jpg"]
    },
    {
      id: 2,
      name: "T-särk NAISTE",
      brand: "MALFINI",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      price: 18,
      images: ["/T-N-E.jpg", "/T-N-T.jpg"]
    },
    {
      id: 3,
      name: "Dress women's KLEIT",
      brand: "Premium",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      price: 55,
      images: ["/KLEIT-E.jpg"]
    },
    {
      id: 4,
      name: "PUSA KAPUUTSI JA LUKUGA",
      brand: "Premium",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      price: 45,
      images: ["/PUSA-LUKUGA-E.jpg", "/PUSA-LUKUGA-T.jpg", "/PUSA-LUKUGA-K.jpg"]
    },
    {
      id: 5,
      name: "PUSA KAPUUTSIGA",
      brand: "Premium",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      price: 35,
      images: ["/PUSA-ULEPEA-E.jpg", "/PUSA-ULEPEA-T.jpg"]
    },
    {
      id: 6,
      name: "PIKAD PÜKSID",
      brand: "Premium",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      price: 40,
      images: ["/ram-pikadpuksid.jpg"]
    },
    {
      id: 7,
      name: "LÜHIKESED PÜKSID",
      brand: "MALFINI",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      price: 19,
      images: ["/LUHKA-LOGO-ALL.jpg", "/LUHKA-LOGO-ULEVAL.jpg"]
    },
    {
      id: 8,
      name: "T-särk MEESTE B&C E190",
      brand: "B&C",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      price: 15,
      images: ["/T-M-E.jpg"]
    }
  ];

  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      let interval;
      if (isHovered && product.images.length > 1) {
        interval = setInterval(() => {
          setCurrentImageIndex(prev => (prev + 1) % product.images.length);
        }, 1000);
      } else {
        setCurrentImageIndex(0);
      }
      return () => clearInterval(interval);
    }, [isHovered, product.images.length]);

    return (
      <div 
        className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div 
          className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer"
          onClick={() => setSelectedItem(product)}
        >
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onLoad={() => console.log('Image loaded:', product.images[currentImageIndex])}
            onError={(e) => {
              console.error('Image failed to load:', product.images[currentImageIndex]);
              console.error('Error details:', e);
            }}
          />
          
          
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <Eye className="w-4 h-4 inline mr-2" />
              Vajuta
            </div>
          </div>

            
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation(); 
                    setCurrentImageIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentImageIndex ? 'bg-white shadow-lg' : 'bg-white bg-opacity-60 hover:bg-opacity-80'
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
            <span className="text-2xl font-bold text-gray-900">{product.price}€</span>
          </div>
          
          <div className="mt-4">
            <p className="text-xs font-bold text-gray-700 mb-3 tracking-wide">Saadaval suurused</p>
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
        </div>
      </div>
    );
  };

  const ProductModal = ({ product, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-80 backdrop-blur-md">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="relative aspect-square">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onLoad={() => console.log('Modal image loaded:', product.images[currentImageIndex])}
                  onError={(e) => {
                    console.error('Modal image failed to load:', product.images[currentImageIndex]);
                    console.error('Error details:', e);
                  }}
                />
                
                {product.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                          index === currentImageIndex ? 'border-gray-900 scale-110 shadow-lg' : 'border-white border-opacity-70 hover:border-gray-400 hover:scale-105'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-lg text-gray-500 font-medium">{product.brand}</p>
                </div>
                <button 
                  onClick={onClose}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-4xl font-bold text-gray-900 mb-8">{product.price}€</div>
              
              <div className="mb-8">
                <p className="font-bold text-gray-900 mb-4 text-lg">Saadaval suurused</p>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
                  {product.sizes.map(size => (
                    <div
                      key={size}
                      className="py-3 px-2 text-center rounded-xl bg-gray-50 border-2 border-gray-100 font-semibold text-gray-900 hover:bg-gray-100 hover:border-gray-200 transition-all duration-200"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Brand: <strong>{product.brand}</strong></span>
                  <span>{product.sizes.length} suurust saadaval</span>
                </div>
              </div>
            </div>
          </div>
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

      {selectedItem && (
        <ProductModal 
          product={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default MerchCard;