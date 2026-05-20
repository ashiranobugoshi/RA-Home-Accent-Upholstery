import React, { useState } from "react";

export const ClickRevealImage = ({ imageSrc, altText }) => {
  // State to track whether the element has been clicked
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      // You can adjust the width (w-[382px]) and height (h-[685px]) to match your layout
      className="relative w-[382px] h-[685px] cursor-pointer overflow-hidden rounded-md shadow-md"
      onClick={() => setIsRevealed(!isRevealed)}
    >
      {/* 1. BEFORE CLICK: The "Blue Part" */}
      {!isRevealed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0e243f] transition-opacity duration-300">
          <span className="text-white text-lg font-bold [font-family:'Playfair_Display-Bold',Helvetica]">
            Click to View Picture
          </span>
          {/* Optional: A small prompt icon or text */}
          <span className="text-gray-300 text-sm mt-2">Tap here</span>
        </div>
      ) : (
        /* 2. AFTER CLICK: The Picture */
        <img
          src={imageSrc} // Pass your image import here
          alt={altText || "Revealed content"}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
        />
      )}
    </div>
  );
};
