import React from "react";

function Productdetails() {
  return (
    <div className="w-screen min-h-[90vh] bg-white">
      <div className="w-full bg-white pt-5 pb-5">
      <div className="w-full h-full max-w-5xl mx-auto rounded-2xl overflow-hidden flex items-center justify-between space-x-2 bg-slate-700 shadow-xl">
        <div className="w-2/4 h-full bg-green-300 ">
          <img
            src="/womenprint2.jpg"
            alt="productdetails"
            className="w-full h-[90vh] object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="w-2/4 flex flex-col">
          <div className="w-3/5 mx-auto">
            <div className="w-full px-2 flex flex-col">
              <h2 className="text-2xl text-yellow-300 mb-3 text-center">
                Your Measurement
              </h2>
              <form className="w-full px-2 py-5 space-y-2 rounded-xl">
                <div>
                  <label className="text-yellow-100">Upload measurement</label>
                  <input type="file" className="bg-white w-full" />
                </div>
                <div>
                  <label className="text-yellow-100">
                    choose material qauntity
                  </label>
                  <select className="bg-white w-full px-2 py-2">
                    <option>choose yards</option>
                    <option>3 yards</option>
                    <option>5 yards</option>
                    <option>7 yards</option>
                  </select>
                </div>
                <div>
                  <label className="text-yellow-100">Delivery Day</label>
                  <select className="bg-white w-full px-2 py-2">
                    <option>choose</option>
                    <option>3 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                  </select>
                </div>
                <div>
                  <label className="text-yellow-100">
                    customise your order
                  </label>
                  <textarea className="bg-white w-full " />
                </div>
              </form>
            </div>
            <div className="mt-5 flex justify-between items-center px-3">
              <div className="text-white">
                <h2>Amount</h2>
                <h2>#10,000</h2>
              </div>
              <button className="p-2 bg-yellow-200 flex items-center justify-center">
                Add to Cart
              </button>
            </div>
          </div>
          {/* <div>
            <h2>Customise your choice</h2>
            <div className=" w-3/5">
              <form>
                <div>
                  <label>Upload measurement</label>
                  <input type="file" />
                </div>
                <div>
                  <label>Delivery Day</label>
                  <select>
                    <option>choose</option>
                    <option>3 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                  </select>
                </div>
                <div>
                  <label>customise your order</label>
                  <textarea />
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Productdetails;
