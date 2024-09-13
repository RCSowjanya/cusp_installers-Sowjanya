"use client";
import React, { useEffect } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Image from "next/image";

const Sales = () => {
  const data = [
    {
      id: 1,
      icon: "/Images/users-icon.png",
      number: 200,
      description: "Total RFPs",
      bgColor: "#FFE2E5",
      iconBgColor: "#FA5A7D",
    },
    {
      id: 2,

      icon: "/Images/proposals-icon.png",
      number: 8,
      description: "Total Proposals Dispatched",
      bgColor: "#F3E8FF",
      iconBgColor: "#BF83FF",
    },
    {
      id: 3,
      icon: "/Images/installer-icon.png",
      // icon: "/Images/quote-icon.png",
      number: 3,
      description: "Total Conversions",
      bgColor: "#FFF4DE",
      iconBgColor: "#FF947A",
    },
    {
      id: 4,
      icon: "/Images/proposals-icon.png",
      number: "5,00,000",
      description: "Total Sales",
      bgColor: "#DCFCE7",
      iconBgColor: "#3CD856",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 gap-y-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bgColor }}
            className="text-white p-4 rounded-lg flex items-center mb-4"
          >
            <div
              style={{ backgroundColor: item.iconBgColor }}
              className="p-2 rounded-full text-white mr-4 w-9 h-9"
            >
              <img src={item.icon} alt="item-icons" />
            </div>
            <div>
              <div className="text-[1.1rem] font-[600] ad text-[#151D48] flex gap-1 items-center">
                {item.id === 4 && <MdOutlineCurrencyRupee />}
                {item.number}
              </div>
              <div className="text-[14px] text-[#425166] font-[400]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
