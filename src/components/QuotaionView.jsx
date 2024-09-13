"use client"
import React, { useEffect, useState } from "react";

import { HiHashtag } from "react-icons/hi";

import { FaCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { GetQuoteDetByID, GetFileURL } from "@/app/functions/ServerFunctions";
import { useRouter } from "next/navigation";
export default function QuotationView({quoteid, s3url}) {
  const router= useRouter();
  const customerid=quoteid;
  const [quotedet, setQuotedet] = useState([])
  const [isloading, setIsloading]=useState(false)
const s3BaseURL=s3url

useEffect(()=>{
  const handleGetDetbyID = async (customer_id) => {
    setIsloading(true)
    try {
      const payload = { customer_id: customer_id }
      const response = await GetQuoteDetByID(payload);
      if (response.status === 200) {
        console.log(response.data)
        setQuotedet(response.data)
        setIsloading(false)
        toast.success("Quote Details retrieved Successfully");
      } else {
        setQuotedet([])
        toast.error("Failed to retrieve Quote Details. Please try again.");
        setIsloading(false)

      }
    } catch (error) {
      setQuotedet([])
      toast.error("Error while retrieving Quote details. Please try again.");
      setIsloading(false)

    } finally {
      setIsloading(false)

    }
  };
  handleGetDetbyID(customerid)
},[customerid])
const getFileAttachments = (dataObj) => {
  return Object.keys(dataObj)
    .filter((key) => key.includes("_upload") && dataObj[key] !== "undefined")
    .map((key) => ({
      attachment: key.replace("_upload", "").replace(/_/g, " ").trim(),
      files: Array.isArray(dataObj[key]) ? dataObj[key] : [dataObj[key]], // in case of multiple files
    }));
};
const handleFileOpen=async(filename)=>{
  try {
   
    const response = await GetFileURL(filename);
    console.log(response)
    if (response.status === 200) {
      console.log(response.data)
      window.open(response.data.url, '_blank');
    } else {
     
      toast.error("Failed to Get the file from the server. Please try again.");
     
    }
  } catch (error) {
   
    toast.error("Error while Getting file from Server. Please try again.");
   

  } finally {
   

  }

}
const data = quotedet.length > 0 ? getFileAttachments(quotedet[0]) : [];
const handleOpenSubmitProposal=async(quoteid)=>{
  router.push("/proposal/"+quoteid)
}
  if (isloading) return (    <div className="w-90 h-auto border mb-11 border-[#7A7A7A] max-[1100px]:w-full  rounded-lg mx-[4%]">
Loading, Please wait...</div>)
if (!isloading){
  return (
    <div className="w-90 h-auto border mb-11 border-[#7A7A7A] max-[1100px]:w-full  rounded-lg mx-[4%]">
      <div className="flex justify-between mb-4 bg-blue-100 px-5 py-5">
        <div className="">
          <h5 className=" text-[12px] font-[500]">ID</h5>
          <p className="text-[14px] text-[#4348BD] font-[500]">{quotedet[0]?.customer_id}</p>
        </div>
        <div className="">
          <h5 className="text-[12px] font-[500]">Status</h5>
          <div className="flex gap-2">
            <div>
              <FaCircle size={14} className="text-green-500 mt-1" />
            </div>
            <p className="text-[14px] text-[#4348BD] font-[500]">{quotedet[0]?.status}</p>
          </div>
        </div>
        <div className="bg-green-500 text-white px-9 py-2 rounded-md">
          <button onClick={()=>handleOpenSubmitProposal(quotedet[0]?.customer_id)}>Submit Proposal</button>
        </div>
      </div>
      <div className="px-[2%] pb-[5%]">
              {quotedet[0]?.type === "Residential" && quotedet[0]?.connection_type === "Ongrid" &&
                <>
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
                          {quotedet[0]?.type}
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
                          {quotedet[0]?.connection_type}
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
                          {quotedet[0]?.area_sqft} Sqft
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
                          {quotedet[0]?.consumption_last_month} Units
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.subsidy ? "Yes" : "No"}
                        </p>
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
                        <p className="text-[12px] font-[600] text-[#48494D]">{quotedet[0]?.install_floor}</p>
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.rf_rights ? "Yes" : "No"}
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.capacity_install} KW
                        </p>
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.sanctioned_load} KW
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              }
              {quotedet[0]?.type === "Residential" && quotedet[0]?.connection_type === "Offgrid" &&
                <>
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
                          {quotedet[0]?.type}
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
                          {quotedet[0]?.connection_type}

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
                          {quotedet[0]?.area_sqft} Sqft
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.capacity_install} KW
                        </p>
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.electricity_connectivity ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                        <HiHashtag className="w-5 h-5" />
                      </div>
                      {/* <div>
                        <h4 className="text-[#666666] font-[400] text-[13px]">
                          Power Outage In Hours
                        </h4>
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {quotedet[0]?.}
                        </p>
                      </div> */}
                    </div>
                  </div>
                </>
              }
              {/*----Quotaions-3----*/}
              {quotedet[0]?.type === "Commercial" &&
                <>
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
                    {quotedet[0]?.type}
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
                        {quotedet[0]?.connection_type}
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
                        {quotedet[0]?.area_sqft} Sqft
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
                        {quotedet[0]?.consumption_last_month} KQ
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
                        {quotedet[0]?.rf_type}
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                        {quotedet[0]?.capacity_install} KW
                        </p>
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
                        <p className="text-[12px] font-[600] text-[#48494D]">
                        {quotedet[0]?.sanctioned_load} KW
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              }
              {/*---Proposals Received to the User---*/}
             
            </div>
      {/* Attachments Table */}
      <div className="mb-4 mx-[2%]">
        <h1 className="text-[18px] font-[600] text-[#000] mb-4">Attachments</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">S.No</th>
              <th className="px-4 py-2 text-left">Attachments</th>
              <th className="px-4 py-2 text-left">Attached Files</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-gray-100 border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.attachment}</td>
                <td className="px-4 py-2 flex gap-2">
                  {item.files.map((file, i) => (
                    <button
                      key={i}
                      onClick={()=>handleFileOpen(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700"
                    >
                      View File {i + 1}
                    </button>
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
}
