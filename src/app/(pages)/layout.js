// import React from "react";
// import ClientLayout from "../ClientLayout";


// export default function Layout({ children }) {
//   return (
   
//         <ClientLayout>
//         <div className="flex">
//       <div
//         className="flex-1 ml-[15rem] transition-all duration-300"
//         style={{ width: `calc(100% - 15rem)` }}
//       >
//         <div className="p-4">
//           {children}
//           </div>
//       </div>
//     </div>
//           </ClientLayout>
     
//   );
// }
import React from "react";
import ClientLayout from "../ClientLayout";

export default function Layout({ children }) {
  return (
    <ClientLayout>
      <div className="p-4">{children}</div>
    </ClientLayout>
  );
}