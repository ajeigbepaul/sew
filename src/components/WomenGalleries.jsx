import React from "react";
import Gallery from "./Gallery";

function WomenGalleries() {
  return (
    <div className="w-full overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-orange-300 scrollbar-thin h-screen snap-x snap-mandatory bg-slate-300 max-h-[350px] flex space-x-2">
      <Gallery img="/femaleexc.jpg" />
      <Gallery img="/femaleexc5.png" />
      <Gallery img="/femaleexc3.jpg" />
      <Gallery img="/femaleexc4.jpg" />
      <Gallery img="/femaleexc6.jpg" />
      <Gallery img="/femaleexc.jpg" />
    </div>
  );
}

export default WomenGalleries;
