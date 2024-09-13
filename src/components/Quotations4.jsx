import React from "react";
import { BiRupee } from "react-icons/bi";

const Quotations4 = () => {
  return (
    <div className="border border-gray-400 rounded-md ">
      <div className="flex items-center justify-between p-2 border-b border-b-[#4348BD]">
        <div className="space-y-1">
          <h5 className="text-[12px]">Quote No</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">98864</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Customer Name</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">XXXXX</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Property Type</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">
            Commercial/Residential
          </p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Date</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">28-8-2024</p>
        </div>
        <div className="">
          <button className="bg-green-500 rounded-md text-white text-[12px] py-2 px-5">
            Preview & Submit
          </button>
        </div>
      </div>
      {/*----top-section---*/}
      <div className="p-3">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-300 text-[#7A7A7A] text-[13px] font-[400] text-left">
              <th className="p-2">Components</th>
              <th className="p-2">Technical Specification</th>
              <th className="p-2">Total Cost (Without Tax)</th>
              <th className="p-2">Tax Slab</th>
            </tr>
          </thead>
          <tbody>
            {/*----first row data---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              {/* First row within the Components column */}
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Solar Photovoltaic Module (Panels) (W/Units)</span>
                  </div>
                  <div className="mb-2">
                    <span>Panels Quantity</span>
                  </div>
                </div>
              </td>

              {/* Technical Specification input fields for both rows */}
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="300W/Units"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="24"
                    />
                  </div>
                </div>
              </td>

              {/* Total Cost input fields for both rows */}
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="relative mb-8">
                    <BiRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="12,000"
                    />
                  </div>
                  <div className="mb-7"></div>
                </div>
              </td>
              {/* Tax Slab dropdown for the first row */}
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <select className="border border-gray-300 p-2 w-full rounded-md ">
                      <option value="">18%</option>
                      <option value="5%">5%</option>
                      <option value="12%">12%</option>
                      <option value="18%">18%</option>
                      <option value="28%">28%</option>
                    </select>
                  </div>
                  {/* Empty div for alignment, since Tax Slab is not applicable for "Panels Quantity" */}
                  <div className="mt-8"></div>
                </div>
              </td>
            </tr>
            {/*---second-row-data---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="my-2">
                    <span>System Capacity(kW)*</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="my-2">
                    <span className="font-[500]">B9*B10/1000</span>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*---third row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="my-2">
                    <span>Area Requirement</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <input
                  type="number"
                  className="border border-gray-300 p-2 w-full rounded-md"
                  placeholder="1000 sft"
                />
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*---fourth row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Panels Brand</span>
                  </div>
                  <div className="mb-2">
                    <span>Panels Technology</span>
                  </div>
                </div>
              </td>

              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="Panasonic"
                    />
                  </div>
                  <div className="mb-2">
                    <select className="border border-gray-300 p-2 w-full rounded-md ">
                      <option value="">Select Technology</option>
                      <option value="">Bifacial Solar Panel</option>
                      <option value="">Bifacial Solar Panel</option>
                      <option value="">Bifacial Solar Panel</option>
                      <option value="">Bifacial Solar Panel</option>
                    </select>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--fifth row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Solar Invertor Capacity(in KW)</span>
                  </div>
                  <div className="mb-2">
                    <span>Solar Invertor Type</span>
                  </div>
                </div>
              </td>

              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="3Kw"
                    />
                  </div>
                  <div className="mb-2">
                    <select className="border border-gray-300 p-2 w-full rounded-md ">
                      <option value="">String Inverters</option>
                      <option value="">String Inverters</option>
                      <option value="">String Inverters</option>
                      <option value="">String Inverters</option>
                      <option value="">String Inverters</option>
                    </select>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="25,000"
                    />
                  </div>
                  <div className="mb-8"></div>
                </div>
              </td>
              <td className="p-2">
                <div className="pb-[24%]">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
                <div className="pb-[24%]"></div>
              </td>
            </tr>
            {/*--sixth row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Solar Invertor Brand</span>
                  </div>
                  <div className="mb-2">
                    <span>Battery Capacity (In AH)</span>
                  </div>
                </div>
              </td>

              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="Luminous NXT"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="100 Ah"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8"></div>
                  <div className="mt-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="30,000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="pb-[24%]"></div>
                <div className="pt-[14%]">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*--seventh row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span className="">Battery Technology</span>
                  </div>
                  <div className="mb-2">
                    <span className="">Number of Batteries</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <select className="border border-gray-300 p-2 w-full rounded-md ">
                      <option value="">Lithium ion</option>
                      <option value="5%">5%</option>
                      <option value="12%">12%</option>
                      <option value="18%">18%</option>
                      <option value="28%">28%</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="5"
                    />
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--eigth row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Solar Battery Brand</span>
                  </div>
                  <div className="mb-2">
                    <span>Module Mounting Structure Type</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="Exide"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="Hot Dip Galvanized Iron"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8"></div>
                  <div className="mt-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="20,000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="pb-[24%]"></div>
                <div className="pt-[14%]">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*--nineth row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Earthing Safety</span>
                  </div>
                  <div className="mb-2">
                    <span>DC Distribution Box</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <select className="border border-gray-300 p-2 w-full rounded-md ">
                      <option value="">yes</option>
                      <option value="5%">No</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="5 Kw"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="">
                    <p className="text-yellow-600 text-[12px] font-[500]">
                      Covered in Total BOS Cost
                    </p>
                  </div>
                  <div className="mt-4 ">
                    <p className="text-yellow-600 text-[12px] font-[500]">
                      Covered in Total BOS Cost
                    </p>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--tenth row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>AC Distribution Box</span>
                  </div>
                  <div className="mb-2">
                    <span>DC Cables (upto 50mts.)**</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="5Kw"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="Enter Value"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="">
                    <p className="text-yellow-600 text-[12px] font-[500]">
                      Covered in Total BOS Cost
                    </p>
                  </div>
                  <div className="mt-4 ">
                    <p className="text-yellow-600 text-[12px] font-[500]">
                      Covered in Total BOS Cost
                    </p>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--11-row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>DC Cables (upto 20mts.)**</span>
                  </div>
                  <div className="mb-2">
                    <span>Panels Warranty(In Years)</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="10"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <p className="text-yellow-600 text-[12px] font-[500]">
                      Covered in Total BOS Cost
                    </p>
                  </div>
                  <div className="mt-4 "></div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--12th row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Inverter Warranty(In Years)</span>
                  </div>
                  <div className="mb-2">
                    <span>Total BOS Cost</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="10"
                    />
                  </div>
                  <div className="mb-2 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="25,000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8"></div>
                  <div className="mt-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="2000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="pb-[24%]"></div>
                <div className="pt-[14%]">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*--13th row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Total System Cost</span>
                  </div>
                  <div className="mb-2">
                    <span>Installation Cost***</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="1,25,000"
                    />
                  </div>
                  <div className="mb-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="15,000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="2000"
                    />
                  </div>
                  <div className="mb-2 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="2000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="mb-4">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
                <div className="mb-2">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*--14th row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Net Metering Cost</span>
                  </div>
                  <div className="mb-2">
                    <span>Net Metering Liasioning cost</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="10000"
                    />
                  </div>
                  <div className="mb-2 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="10000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="2000"
                    />
                  </div>
                  <div className="mb-2 relative">
                    {/* Rupee symbol positioned inside the input field */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <BiRupee size={16} />
                    </span>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 pl-8 w-full rounded-md"
                      placeholder="2000"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="mb-4">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
                <div className="mb-2">
                  <select className="border border-gray-300 p-2 w-full rounded-md ">
                    <option value="">18%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*--15th-row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Total Project Cost(exclusive of Tax)</span>
                  </div>
                  <div className="mb-2">
                    <span>Tax</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4"></div>
                  <div className="mb-2"></div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <p className="flex  font-[500]">
                      <BiRupee className="mt-[3px]" /> 78,000
                    </p>
                  </div>
                  <div className="">
                    <p className="flex  font-[500]">
                      <BiRupee className="mt-[3px]" /> 30,000
                    </p>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--16th row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Total Project Cost</span>
                  </div>
                  <div className="mb-2">
                    <span>Delivery Period (In days)</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4"></div>
                  <div className="mt-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="2"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <p className="flex  font-[500]">
                      <BiRupee className="mt-[3px]" /> 1,08,000
                    </p>
                  </div>
                  <div className="mb-5"></div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--17th row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span>Scope Of Maintenance Services</span>
                  </div>
                  <div className="mb-2">
                    <span>Payment Terms</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="5"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 w-full rounded-md"
                      placeholder="EMI"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="mb-11">
                    <p className="">Following to be included</p>
                  </div>
                  <div className="mb-5"></div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*---18th row---*/}
            <tr className="bg-gray-100 text-gray-800 text-[14px] border-b border-b-gray-300">
              <td className="p-2">
                <div className="flex flex-col">
                  <div className="my-2">
                    <span>Price Validity(In Days)</span>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <input
                  type="number"
                  className="border border-gray-300 p-2 w-full rounded-md"
                  placeholder="6"
                />
              </td>
              <td className="p-2"></td>
              <td className="p-2">
                <p className="">Minimum 30 days</p>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="border border-gray-300 py-3 px-2 space-y-3 mx-2">
        <p className="text-[#4348BD] font-[600]">
          * This is based on the information Provided.Accurate details Will be
          provided after Site Visit
        </p>
        <p className="text-[#4348BD] font-[600]">
          ** Cables over and above the mentioned quantity will be charged
          separately
        </p>
        <p className="text-[#4348BD] font-[600]">
          *** This is tentative and subject to variation by +/- 5%. Final quote
          will be provided after site visit.
        </p>
      </div>
    </div>
  );
};

export default Quotations4;
