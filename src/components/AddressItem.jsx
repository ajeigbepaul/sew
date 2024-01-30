import React from "react";
import { FaRegCircle } from "react-icons/fa";
function AddressItem() {
  return (
    <div className="flex items-center gap-4 border border-gray-500 p-2 rounded-md mb-4">
      <FaRegCircle size={24} />
      <span className="text-sm">
        No 28, Alonge Street, Alimustapha, Ayobo, Lagos, Nigeria
      </span>
    </div>
  );
}

export default AddressItem;
