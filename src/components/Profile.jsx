"use client";
import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const authState = useSelector((state) => state.auth);
  const userDetails = authState.userDetails;
  return (
    <div className="w-90 h-auto mb-11 border border-gray-300 shadow-lg  max-[1100px]:w-full  rounded-lg">
      <div className="flex justify-between mb-4 border-b border-b-[#9599FF] bg-[#F4F4FF] px-5 py-3 rounded-t-lg">
        <div className="">
          <h5 className="text-[14px] font-[500]">Customer Name</h5>
          <p className="text-[1rem] text-[#4348BD] font-[600]">
            {userDetails.company_name}
          </p>
        </div>
        <div className="">
          <h5 className="text-[14px] font-[500] ml-5">Status</h5>
          <div className="flex gap-2 ">
            <div>
              <FaCircle
                size={14}
                className={`${
                  userDetails.company_status ? "text-green-500" : "text-red-500"
                } mt-1`}
              />
            </div>
            <p className="text-[1rem] text-[#4348BD] font-[600]">
              {userDetails.company_status ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>
      <div className="px-[2%]">
        <h1 className="text-[22px] font-[600] text-[#000] mb-4">
          Contact Details
        </h1>
        <div className="flex border-b border-b-[#D7D7D7] justify-between">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Mobile Number
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {userDetails.mobile}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Email</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {userDetails.email}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Registered Office Address
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {userDetails.flat_number}, {userDetails.street_name},{" "}
                {userDetails.city}, {userDetails.state}-{userDetails.pin_code}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 border-b border-b-gray-300 gap-y-8 py-4">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Business Role
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {userDetails.business_role}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Type Of Entity
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {userDetails.type_of_entity}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Experience In Solar Installations
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {userDetails.total_years_in_solar_installation} years
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">GST</h4>
              <p className="text-[12px] font-[600] text-[#48494D] flex">
                {userDetails.gst_no}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">TAN</h4>
              <p className="text-[12px] font-[600] text-[#48494D] flex">
                {userDetails.tan_no}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">PAN</h4>
              <p className="text-[12px] font-[600] text-[#48494D] flex">
                {userDetails.pan_no}
              </p>
            </div>
          </div>
        </div>

        {/*---- Installers ----*/}
        <div className="border-b border-b-gray-300">
          <h4 className="text-[22px] font-[600] text-[#000] py-4">
            Empanellment Details
          </h4>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 justify-items-stretch">
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  {userDetails.empanelled_with_state_board ? "Yes" : "No"}
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Yes</p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Electricity Boards Empanelled
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  {userDetails.name_of_empanelled_electricity_board}
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Dealing Brands
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  {userDetails.list_of_product_brands}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Combined Capacity of Total Installations Done Till Date
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  {
                    userDetails.combined_capacity_of_total_installations_till_date
                  }{" "}
                  kW
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Installation Capacity of the largest Project Worked on
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  {userDetails.installed_capacity_of_largest_project_worked_on}{" "}
                  kW
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Geographical Regions
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  {userDetails.geographical_regions}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*----Customers---*/}
        <div className="border-b border-b-gray-300">
          <div>
            <div className="flex gap-3  py-4 justify-between">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Total No.of Employees
                  </h4>
                  <p className="text-[11px] text-[#7A7A7A]text-[12px] font-[600] text-[#48494D]">
                    {userDetails.no_of_employees}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Total No.of Installation Crews
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    {userDetails.total_no_of_installation_crews}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Reference site details
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    {userDetails.reference_site_details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
