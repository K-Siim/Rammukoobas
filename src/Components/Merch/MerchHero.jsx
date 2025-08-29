import React from 'react';
import MerchCard from './MerchCard';

const Merch = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Merch
            </h1>
            <p className="text-lg text-gray-600 text-center mb-16">
              Soeta meie merchi.
            </p>
          </div>
        </div>

        {/* MerchCard Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MerchCard />
          </div>
        </div>
      </div>
    );
  };
  
  export default Merch;