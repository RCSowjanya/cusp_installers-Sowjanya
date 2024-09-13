"use client";
import React, { useEffect, useState } from "react";
import {
  MdSearch,
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { GetQuotesAll, GetQuoteDetByID } from "@/app/functions/ServerFunctions";
import { HiHashtag } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function Quotations() {
  const router = useRouter();
  const authState = useSelector((state) => state.auth);
  const userDetails = authState.userDetails;
  const [quotations, setQuotations] = useState([]);
  const [quotedet, setQuotedet] = useState([]);
  const [currentquote, setCurrentquote] = useState(0);
  useEffect(() => {
    const GetAllQuotes = async () => {
      try {
        const payload = { company_id: userDetails.company_id };
        const response = await GetQuotesAll(payload);
        if (response.status === 200) {
          setQuotations(response.data);
          if (response.data.length > 0) {
            await handleGetDetbyID(response.data[0].customer_id);
          }
          toast.success("All Quotes Retrieved Successfully");
        } else {
          setQuotations([]);
          toast.error("Failed to retrieve Quotes. Please try again.");
        }
      } catch (error) {
        setQuotations([]);
        toast.error("Error while retrieving quotes. Please try again.");
      } finally {
      }
    };
    GetAllQuotes();
  }, [authState]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter By Status");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const totalPages = Math.ceil(quotations.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentDisplayedUsers = quotations.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 1;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(
        currentPage - Math.floor(maxPageNumbersToShow / 2),
        1
      );
      const endPage = Math.min(
        startPage + maxPageNumbersToShow - 1,
        totalPages
      );

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        if (startPage > 2) {
          pageNumbers.unshift("...");
        }
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => number !== "..." && paginate(number)}
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === number ? "bg-[#4348BD] text-white" : "bg-gray-300"
        }`}
      >
        {number}
      </button>
    ));
  };
  const handleGetDetbyID = async (customer_id) => {
    try {
      setCurrentquote(customer_id);
      const payload = { customer_id: customer_id };
      const response = await GetQuoteDetByID(payload);
      if (response.status === 200) {
        console.log(response.data);
        setQuotedet(response.data);
        toast.success("Quote Details retrieved Successfully");
      } else {
        setQuotedet([]);
        toast.error("Failed to retrieve Quote Details. Please try again.");
      }
    } catch (error) {
      setQuotedet([]);
      toast.error("Error while retrieving Quote details. Please try again.");
    } finally {
    }
  };
  const handleQuotatioView = async (currentquoteid) => {
    router.push("/quotations/" + currentquoteid);
  };
  return (
    <div className="">
      <div className="flex gap-3 max-[1100px]:flex-col">
        {/*---- All Quotations start here ----*/}
        <div className="w-1/2 h-[46rem]  pb-6 border border-gray-300 shadow-lg max-[1100px]:w-full rounded-lg ">
          <div className="flex justify-between mb-4 py-4 px-3 bg-[#F4F4FF] rounded-t-lg border-b border-b-[#9599FF]">
            <p className="text-[22px] font-[600] text-[#4348BD] mr-2">
              All Quotations
            </p>
            {/* <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-24 p-1 text-[12px] font-[400] text-[#B5B7C0]"
              />
              <MdSearch className="text-gray-500 text-xl ml-2" />
            </div> */}
            <div className="relative">
              <p className="flex items-center text-[12px] ml-3 text-[#7E7E7E]">
                Sort by:
                <button
                  onClick={toggleDropdown}
                  className="text-[#7E7E7E] ml-2 bg-[#E6E8FF] px-6 py-2 flex items-center border border-[#7E7E7E] rounded-md"
                >
                  <span className="mr-2 text-[#7E7E7E]">{selectedOption}</span>
                  <MdKeyboardArrowDown />
                </button>
              </p>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Filter by status")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Closed
                    </button>
                  </a>
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Oldest")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Oldest
                    </button>
                  </a>
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Most Popular")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Most Popular
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
          {/*---- Table ----*/}
          <div className="flex-grow">
            <table className="min-w-full bg-white mt-8">
              <thead>
                <tr>
                  <th className="text-[12px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Quotation ID
                  </th>
                  <th className="text-[12px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Capacity(in KWs)
                  </th>
                  <th className="text-[12px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Property Type
                  </th>
                  <th className="text-[12px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    City
                  </th>
                  <th className="text-[12px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quotations, index) => (
                  <React.Fragment key={quotations.id}>
                    <tr
                      className="cursor-pointer"
                      onClick={() => handleGetDetbyID(quotations.customer_id)}
                    >
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.customer_id}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.capacity_install}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.type}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.city.trim()}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.status}
                      </td>
                    </tr>
                    {index !== currentDisplayedUsers.length - 1 && (
                      <tr>
                        <td colSpan="5" className="py-2"></td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          {/*---- Pagination ----*/}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded-md mr-2"
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            {renderPageNumbers()}
            <button
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded-md ml-2"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        {/*---- All Quotations close ----*/}
        {/*---- Quotations details start here ----*/}
        {quotedet.length === 0 && (
          <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full rounded-lg">
            <div className="text-center">No Quote Selected</div>
          </div>
        )}
        {quotedet.length > 0 && (
          <div className="w-1/2 h-[46rem] border border-gray-300 max-[1100px]:w-full rounded-lg">
            <div className="flex justify-between mb-4 bg-[#F4F4FF] border-b rounded-t-lg border-b-[#9599FF] px-5 py-3">
              <div className="">
                <h5 className=" text-[12px] font-[500]">ID</h5>
                <p className="text-[14px] text-[#4348BD] font-[500]">
                  {quotedet[0].customer_id}
                </p>
              </div>
              <div className="">
                <h5 className="text-[12px] font-[500]">Status</h5>
                <div className="flex gap-2">
                  <div>
                    <FaCircle size={14} className="text-green-700 mt-1" />
                  </div>
                  <p className="text-[14px] text-[#4348BD] font-[500]">
                    {quotedet[0].status}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[2%] pb-[5%]">
              {quotedet[0].type === "Residential" &&
                quotedet[0].connection_type === "Ongrid" && (
                  <div>
                    <div className="flex gap-4 mb-4">
                      <h1 className="text-[18px] font-[600] text-[#000] mb-4">
                        Quotations Details
                      </h1>
                      <button className="text-[12px] px-2 bg-[#4348BD3B] rounded-full text-[#181C88] font-[600]">
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
                            {quotedet[0].type}
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
                            {quotedet[0].connection_type}
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
                            {quotedet[0].area_sqft} Sqft
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
                            {quotedet[0].consumption_last_month} Units
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
                            {quotedet[0].subsidy ? "Yes" : "No"}
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
                          <p className="text-[12px] font-[600] text-[#48494D]">
                            {quotedet[0].install_floor}
                          </p>
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
                            {quotedet[0].rf_rights ? "Yes" : "No"}
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
                            {quotedet[0].capacity_install} KW
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
                            {quotedet[0].sanctioned_load} KW
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              {quotedet[0].type === "Residential" &&
                quotedet[0].connection_type === "Offgrid" && (
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
                            {quotedet[0].type}
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
                            {quotedet[0].connection_type}
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
                            {quotedet[0].area_sqft} Sqft
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
                            {quotedet[0].capacity_install} KW
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
                            {quotedet[0].electricity_connectivity
                              ? "Yes"
                              : "No"}
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
                          {quotedet[0].}
                        </p>
                      </div> */}
                      </div>
                    </div>
                  </>
                )}
              {/*----Quotaions-3----*/}
              {quotedet[0].type === "Commercial" && (
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
                          {quotedet[0].type}
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
                          {quotedet[0].connection_type}
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
                          {quotedet[0].area_sqft} Sqft
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
                          {quotedet[0].consumption_last_month} KQ
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
                          {quotedet[0].rf_type}
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
                          {quotedet[0].capacity_install} KW
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
                          {quotedet[0].sanctioned_load} KW
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/*---Proposals Received to the User---*/}
              <div className="text-center mt-4">
                <button
                  className="px-11 py-2 border font-[600] border-[#4348BD] text-[#4348BD] rounded-md"
                  onClick={() => handleQuotatioView(currentquote)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*---- Quotations details end here ----*/}
    </div>
  );
}
