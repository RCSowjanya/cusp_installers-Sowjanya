"use client";
import React, { useState, useEffect } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import Pagination from "@/components/Pagination";
import { FaCircle } from "react-icons/fa";
import {
  SubmittedProposals,
  ProposalDetByID,
} from "@/app/functions/ServerFunctions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function Proposals() {
  const router = useRouter();
  const authState = useSelector((state) => state.auth);
  const userDetails = authState.userDetails;
  const [proposals, setProposals] = useState([]);
  const [proposaldet, setProposaldet] = useState([]);
  useEffect(() => {
    const GetAllProposals = async () => {
      try {
        const response = await SubmittedProposals(userDetails.company_id);
        if (response.status === 200) {
          setProposals(response.data);
          toast.success("All Proposals Retreived Successfully");
        } else {
          setProposals([]);
          toast.error("Failed to retrieve Proposals. Please try again.");
        }
      } catch (error) {
        setProposals([]);
        toast.error("Error while retrieving Proposals. Please try again.");
      } finally {
      }
    };
    GetAllProposals();
  }, [authState]);
  const handleProposalDetByID = async (proposal_id) => {
    try {
      const response = await ProposalDetByID(proposal_id);
      if (response.status === 200) {
        setProposaldet(response.data);
      } else {
        toast.error(response.Message);
        setProposaldet([]);
      }
    } catch (error) {
      toast.error("Cannot Get the Proposal Details");
      setProposaldet([]);
    }
  };
  const handleViewProposal = async (proposal_id) => {
    router.push("/Proposal-View/" + proposal_id);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Closed");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentDisplayedProposals = proposals.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className="flex gap-3 max-[1100px]:flex-col">
        {/*---- All proposals start here ----*/}
        <div className="w-1/2 h-[46rem] border pb-6 border-gray-300 shadow-lg max-[1100px]:w-full rounded-lg">
          <div className="flex justify-between mb-4 p-4 bg-[#F4F4FF] rounded-t-lg border-b border-b-[#9599FF]">
            <p className="text-[1.2rem] font-[600] text-[#4348BD]">
              All Proposals
            </p>
            <div className="flex items-center bg-[#E6E8FF]  border border-gray-300 rounded-lg px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-24 p-1 text-[12px] bg-[#E6E8FF]  font-[400] text-[#B5B7C0]"
              />
              <MdSearch className="text-[#B5B7C0]  ml-2" />
            </div>
            <div className="relative">
              <p className="flex items-center text-[12px] ml-3 text-[#7E7E7E]">
                Sort by:
                <button
                  onClick={toggleDropdown}
                  className="text-[#7E7E7E] ml-2  px-6 py-2 flex items-center border border-[#7E7E7E] rounded-md bg-[#E6E8FF]"
                >
                  <span className="mr-2 text-[#7E7E7E]">{selectedOption}</span>
                  <MdKeyboardArrowDown />
                </button>
              </p>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Closed")}
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
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Newest")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Newest
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
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Proposal ID
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Quote Req ID
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Date Of Submission
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Amount
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayedProposals.map((proposals, index) => (
                  <React.Fragment key={proposals.proposal_id}>
                    <tr
                      className="cursor-pointer"
                      onClick={() =>
                        handleProposalDetByID(proposals.proposal_id)
                      }
                    >
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {proposals.proposal_id}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {proposals.customer_id}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {proposals.proposal_date}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {proposals.total_project_cost}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {proposals.status}
                      </td>
                    </tr>
                    {index !== currentDisplayedProposals.length - 1 && (
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
            <Pagination
              currentPage={currentPage}
              usersPerPage={usersPerPage}
              totalUsers={proposals.length}
              paginate={paginate}
            />
          </div>
        </div>
        {/*---- All proposals close ----*/}
        {/*---- proposals details start here ----*/}
        {proposaldet.length === 0 && (
          <div className="w-1/2 text-center py-2   text-[#4348BD] max-[1100px]:w-full pb-7 bg-[#F4F4FF] rounded-t-lg rounded-lg h-[46rem]  border border-gray-300 shadow-lg">
            No Proposal Selected to View
          </div>
        )}
        {proposaldet.length > 0 && (
          <div className="w-1/2  max-[1100px]:w-full pb-7 border-b border-b-[#9599FF] rounded-lg h-[46rem]  border border-gray-300 shadow-lg">
            <div className="flex justify-between mb-4 bg-[#F4F4FF] rounded-t-lg px-5 py-3">
              <div className="">
                <h5 className=" text-[12px] font-[500]">Customer Name</h5>
                <p className="text-[14px] text-[#4348BD] font-[500]">
                  {proposaldet[0].name}
                </p>
              </div>
              <div className="">
                <h5 className="text-[12px] font-[500]">Status</h5>
                <div className="flex gap-2">
                  <div>
                    <FaCircle
                      size={14}
                      className={`mt-1 ${
                        proposaldet[0].status === "Submitted"
                          ? "text-orange-500"
                          : proposaldet[0].status === "Closed"
                          ? "text-red-500"
                          : proposaldet[0].status === "Approved"
                          ? "text-green-500"
                          : ""
                      }`}
                    />{" "}
                  </div>
                  <p className="text-[14px] text-[#4348BD] font-[500]">
                    {proposaldet[0].status}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[2%] pb-[5%]">
              <h1 className="text-[22px] font-[600] text-[#000] mb-4">
                Proposals Details
              </h1>
              <div className="grid grid-rows-2 grid-cols-3 border-b border-b-gray-300 gappy-4">
                <div className="flex gap-3 mb-4">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                    <HiHashtag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">
                      Proposal Id
                    </h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">
                      {proposaldet[0].proposal_id}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                    <HiHashtag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">
                      Quotation Id
                    </h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">
                      {proposaldet[0].customer_id}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                    <HiHashtag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">
                      Date Of Submission
                    </h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">
                      {proposaldet[0].date_of_submission}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                    <HiHashtag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">
                      Amount
                    </h4>
                    <p className="text-[12px] font-[600] text-[#48494D] flex">
                      <span>
                        <BiRupee className="mt-1" />
                      </span>
                      {proposaldet[0].total_project_cost}
                    </p>
                  </div>
                </div>
              </div>
              {/*---- Installers ----*/}
              <div className="border-b border-b-gray-300">
                <h4 className="text-[22px] font-[600] text-[#000] py-4">
                  Quote Details
                </h4>
                <div className="flex gap-3 justify-between">
                  <div className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Type
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {proposaldet[0].type}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Connection type
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {proposaldet[0].connection_type}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Organization Type
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {proposaldet[0].org_type}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Electricity Connectivity
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {proposaldet[0].electricity_connectivity ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Total Area
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {proposaldet[0].area_sqft} Sqft
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Last Month Subscription
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {proposaldet[0].last_month_consumption} KW
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*----Customers---*/}
              <div className="">
                <div>
                  <div className="flex gap-3  py-4 justify-between">
                    <div className="flex gap-3 mb-4">
                      <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                        <HiHashtag className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[#666666] font-[400] text-[13px]">
                          Need Subsidy
                        </h4>
                        <p className="text-[11px] text-[#7A7A7A]text-[12px] font-[600] text-[#48494D]">
                          {proposaldet[0].need_subsidy ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                        <HiHashtag className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[#666666] font-[400] text-[13px]">
                          Roof Rights
                        </h4>
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {proposaldet[0].roof_rights ? "Yes" : "No"}
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
                          {proposaldet[0].capacity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <div className="flex gap-3 mb-4">
                      <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                        <HiHashtag className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[#666666] font-[400] text-[13px]">
                          Current Sanctioned Load
                        </h4>
                        <p className="text-[12px] font-[600] text-[#48494D]]">
                          {proposaldet[0].current_sanctioned_load}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="px-11 py-2 border font-[600] border-[#4348BD] text-[#4348BD] rounded-md"
                  onClick={() => handleViewProposal(proposaldet[0].proposal_id)}
                >
                  View Proposal
                </button>
              </div>
            </div>
            {/*-----Customers- close---*}
            {/*---- Proposals details end here ----*/}
          </div>
        )}
      </div>
    </div>
  );
}
