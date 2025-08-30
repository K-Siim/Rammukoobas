import React from 'react';
import MerchCard from './MerchCard';

const Merch = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
                        Rammuklubi Merch – rohkem kui varustus, see on sinu jõu sümbol.
                    </h1>
                    <p className="text-lg text-gray-600 text-center mb-16">
                        Soeta meie merchi.
                        Oma soovist kirjuta meile meil: <a href="mailto:rammuklubi@gmail.com">rammuklubi@gmail.com</a> või helista: <a href="tel:+37256904999">+372 56904999

                        </a>
                    </p>
                </div>
            </div>

            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MerchCard />
                </div>
            </div>
        </div>
    );
};

export default Merch;