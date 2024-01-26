import React from 'react'

function Subheader({title,subtitle, className,titleclass,subtitleclass}) {
  return (
    <div className={className}>
      <h2 className={`text-center text-2xl font-semibold ${titleclass}`}>{title}</h2>
      <h2 className={`text-center text-sm ${subtitleclass}`}>{subtitle}</h2>
    </div>
  );
}

export default Subheader