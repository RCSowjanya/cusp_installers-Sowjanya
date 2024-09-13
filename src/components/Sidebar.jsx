"use client"; // Ensure this component is client-side

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 14+
import { MdDashboard, MdShoppingCart, MdInsertDriveFile } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const sidebarItems = [
  {
    name: "dashboard",
    label: "Dashboard",
    address: "/dashboard",
    icon: MdDashboard,
  },
  { name: "orders", label: "Orders", address: "/orders", icon: MdShoppingCart },
  {
    name: "quotations",
    label: "Quotations",
    address: "/quotations",
    icon: MdInsertDriveFile,
  },
  {
    name: "proposals",
    label: "Proposals",
    address: "/proposals",
    icon: MdInsertDriveFile,
  },
  {
    name: "profile",
    label: "Profile",
    address: "/profile",
    icon: MdInsertDriveFile,
  },
];

export default function Sidebar({ isActiveItem, setIsActiveItem }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const handleToggle = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    if (typeof setIsActiveItem === "function") {
      setIsActiveItem(item.name);
    } else {
      console.error("setIsActiveItem is not a function");
    }
    router.push(item.address);
  };

  return (
    <div
      className={`sticky top-0 left-0 min-h-screen bg-[#4348BD] text-white ${
        isOpen ? "w-60" : "w-16"
      } transition-width duration-300 z-50`}
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="mx-auto mb-8 flex justify-center">
          <img
            src="/Images/cusp-logo.webp"
            alt="cusp-logo"
            width={160}
            height="160"
            className={`w-40 h-auto mr-4 ${isOpen ? "block" : "hidden"}`}
          />
        </div>

        <button
          onClick={handleToggle}
          className={`mb-4 ${isOpen ? "hidden" : "block"}`}
        >
          <FaArrowLeft />
        </button>

        <div className="flex flex-col items-start w-full px-2">
          {sidebarItems.map((item) => {
            const isActive = isActiveItem === item.name;
            return (
              <div
                key={item.name}
                onClick={() => handleItemClick(item)}
                className={`py-4 px-8 cursor-pointer w-full rounded-lg flex items-center gap-4 text-[16px] font-[500] transition-colors duration-300
                ${
                  isActive
                    ? "bg-white text-[#4348BD]"
                    : "text-white hover:bg-white hover:text-[#4348BD] hover:font-bold"
                }`}
              >
                <item.icon
                  className={`text-[18px] font-[500] transition-colors duration-300 ${
                    isActive
                      ? "text-[#4348BD]"
                      : "text-white hover:text-[#4348BD]"
                  }`}
                  style={{ width: "20px", height: "20px" }}
                />
                {isOpen && <span className="ml-2">{item.label}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
