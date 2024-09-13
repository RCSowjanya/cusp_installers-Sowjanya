"use client";
import React, { useState } from "react";
import { HiHashtag } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
export default function page() {
  const data = [
    { id: 1, attachment: "Roof Layout", files: ["Images"] },
    { id: 2, attachment: "Video", files: ["Video"] },
  ];
  return (
    <div className="w-90 h-auto border mb-11 border-[#7A7A7A] max-[1100px]:w-full  rounded-lg ">
      <div className="flex justify-between mb-4 bg-blue-100 px-5 py-5">
        <div className="">
          <h5 className=" text-[12px] font-[500]">ID</h5>
          <p className="text-[14px] text-[#4348BD] font-[500]">98864</p>
        </div>
        <div className="">
          <h5 className="text-[12px] font-[500]">Status</h5>
          <div className="flex gap-2">
            <div>
              <FaCircle size={14} className="text-green-500 mt-1" />
            </div>
            <p className="text-[14px] text-[#4348BD] font-[500]">In Progress</p>
          </div>
        </div>
      </div>
      <div className="px-[2%] py-[2%]">
        <div className="flex gap-4 mb-4">
          <h1 className="text-[18px] font-[600] text-[#000] mb-4">
            Quotations Details
          </h1>
          <button className="text-[14px] px-2 bg-[#4348BD] rounded-full text-white">
            IF Residential and on grid
          </button>
        </div>
        <div className="grid grid-rows-3 grid-cols-3 border-b border-b-gray-300  gap-y-8 py-4 ">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Establishment
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D] break-all">
                Residential/Commercial
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Connection Type
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                On Grid/off Grid
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px] break-words">
                Total Roof Area
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D] break-all">
                xxx sqft
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Last Month Consumption
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                XXXX Units
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Need Subsidy
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Yes/No</p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Floor No
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">2</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Roof Rights?
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Yes/No</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Capacity
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">XXX KW</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Current Sanction Load
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">XXXX KW</p>
            </div>
          </div>
        </div>
        {/*----quotation deatils-2---*/}
        <div className="flex gap-4 m-4">
          <h1 className="text-[18px] font-[600] text-[#000] mb-4">
            Quotations Details
          </h1>
          <button className="text-[14px] px-2 bg-[#4348BD] rounded-full text-white">
            IF Residential and off grid
          </button>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 border-b border-b-gray-300  gap-y-8 py-4 ">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Establishment
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D] break-all">
                Residential/Commercial
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Connection Type
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                On Grid/off Grid
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px] break-words">
                Total Roof Area
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D] break-all">
                xxx sqft
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Capacity
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">XXXX KW</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Electricity Connectivity
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Yes/No</p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Power Outage In Hours
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                XXXX Hours
              </p>
            </div>
          </div>
        </div>
        {/*----Quotaions-3----*/}
        <div className="flex gap-4 m-4">
          <h1 className="text-[18px] font-[600] text-[#000] mb-4">
            Quotations Details
          </h1>
          <button className="text-[14px] px-3 py-1 bg-[#4348BD] rounded-full text-white">
            IF Commercial
          </button>
        </div>
        <div className="grid grid-rows-3 grid-cols-3 border-b border-b-gray-300  gap-y-8 py-4 ">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Establishment
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D] break-all">
                Residential/Commercial
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Connection Type
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                On Grid/off Grid
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px] break-words">
                Total Roof Area
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D] break-all">
                xxx sqft
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Last Month Consumption
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                XXXX Units
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Type Of Roof
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                Concrete/Tin Shade/Others
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Capacity
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">XXX KW</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Current Sanction Load
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">XXX KW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 mx-[2%]">
        <h1 className="text-[18px] font-[600] text-[#000] mb-4">Attachments</h1>
        <table className="min-w-full bg-white">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left">S.No</th>
              <th className="px-4 py-2 text-left">Attachments</th>
              <th className="px-4 py-2 text-left">Attached Files</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-gray-100 border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.attachment}</td>
                <td className="px-4 py-2 flex gap-2">
                  {item.files.map((file, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700"
                    >
                      {file}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
