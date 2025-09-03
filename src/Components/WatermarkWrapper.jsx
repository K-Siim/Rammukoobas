import React from 'react';

const WatermarkWrapper = ({ children, showWatermark = true, opacity = 0.04, logoSize = 120 }) => {
  const watermarkStyle = {
    backgroundImage: 'url("/taust.png")',
    backgroundRepeat: 'repeat',
    backgroundSize: logoSize + 'px ' + logoSize + 'px',
    backgroundPosition: '0 0',
    opacity: opacity,
  };
  
  return (
    <div className="relative min-h-screen">
      {showWatermark && (
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            ...watermarkStyle,
            zIndex: -1,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default WatermarkWrapper;