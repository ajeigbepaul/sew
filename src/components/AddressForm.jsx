import React, { useState } from "react";

function AddressForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the form data like sending it to a server
    console.log(formData);
    // Clear the form after submission if needed
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      country: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-2">
        <div className="w-full flex flex-col mb-1">
          <label className="text-[14px] text-gray-600">Fullname</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full bg-gray-100"
          />
        </div>
        <div className="w-full flex flex-col mb-1">
          <label className="text-[14px] text-gray-600">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100"
          />
        </div>
        <div className="w-full flex flex-col mb-1">
          <label className="text-[14px] text-gray-600">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-100"
          />
        </div>
        <div className="w-full flex flex-col mb-1">
          <label className="text-[14px] text-gray-600">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-gray-100"
          />
        </div>
        <div className="w-full flex flex-col mb-1">
          <label className="text-[14px] text-gray-600">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full bg-gray-100"
          />
        </div>
        <div className="w-full flex flex-col mb-1">
          <label className="text-[14px] text-gray-600">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full p-1 flex items-center justify-center bg-red-400 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
