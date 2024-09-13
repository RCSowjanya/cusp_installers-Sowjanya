"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { useSelector, useDispatch } from "react-redux";
import { SessionOut } from "@/components/SessonOut";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { persistor } from "@/redux/store";
import { useState } from "react";
export default function ClientLayout({ children }) {
  const authState = useSelector((state) => state.auth);
  const pathname = usePathname();
  const router = useRouter();
  //Extract the last segment of the path
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1] || "dashboard";

  // const pathSegments = pathname.split("/");
  // const lastSegment = pathSegments[pathSegments.length - 1] || "dashboard";
  // const [isActiveItem, setIsActiveItem] = useState(lastSegment);
  const dispatch = useDispatch();

  // Capitalize the first letter of the last segment
  const capitalizedTitle = pathname.includes("Proposal-View")
    ? "Proposal-View: " + lastSegment
    : lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  const ClearReduxStore = () => {
    dispatch({ type: "RESET_STORE" });
    persistor.purge().then(() => {
      console.log("Redux state and persisted data cleared.");
    });
  };
  const handleLogout = async () => {
    ClearReduxStore();
    toast.success("Logged Out Successfully...");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };
  if (!authState.accessToken) {
    return <SessionOut />;
  }
  return (
    <div className="flex min-h-screen ">
      <div className="sticky top-0 bottom-0 min-h-screen ">
        <Sidebar isActiveItem={pathSegments} setIsActiveItem={pathSegments} />
        {/* <Sidebar
          isActiveItem={isActiveItem}
          setIsActiveItem={setIsActiveItem}
        />*/}
      </div>
      <div
        className={`flex-1 transition-all duration-300
        `}
      >
        <div className="sticky top-0 z-10 bg-white shadow-lg ml-5 rounded-lg border-b border-b-gray-300">
          <DashboardHeader
            title={capitalizedTitle}
            userInfo={authState.userDetails}
            handleLogout={handleLogout}
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
