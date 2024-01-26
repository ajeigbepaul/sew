import { HiOutlineShoppingBag } from "react-icons/hi";
function ProductCard({ img, infoclass, title, price, discount }) {
  return (
    <div className="flex relative items-center flex-col justify-center w-full  md:w-[200px] hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200 text-white shadow-md rounded-md overflow-hidden">
      <img
        src={img}
        width={300}
        height={300}
        className="w-full h-full object-cover"
        alt="productsimages"
      />
      <div
        className={`bg-blue-200 w-full py-3 px-2 mt-1 flex flex-col ${infoclass}`}
      >
        {title && <h2 className="font-semibold text-sm">{title}</h2>}
        <div className="w-full flex">
         {price &&  <div className="w-full flex flex-col">
            <span className="text-md font-bold">#{price}</span>
            <span className="text-sm line-through">#{discount}</span>
          </div>}
          {price && <div className="rounded-lg bg-black px-2 flex items-center justify-center w-10 h-10">
          <HiOutlineShoppingBag size={24} className="text-orange-300" />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
