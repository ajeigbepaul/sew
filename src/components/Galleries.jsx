import React from 'react'
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
// import Link from 'next/link';

function Galleries() {
  return (
    <div className="w-full overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-orange-300 scrollbar-thin h-screen snap-x snap-mandatory bg-slate-300 max-h-[350px] flex space-x-2">
      <Link to={"/productdetails"}>
        <Gallery img="/maleclothe3.jpg" />
      </Link>
      <Gallery img="/maleclothe4.jpg" />
      <Gallery img="/maleclothe5.jpg" />
      <Gallery img="/maleclothe6.jpg" />
      <Gallery img="/maleclothe7.jpg" />
      <Gallery img="/maleclothe2.jpg" />
    </div>
  );
}

export default Galleries