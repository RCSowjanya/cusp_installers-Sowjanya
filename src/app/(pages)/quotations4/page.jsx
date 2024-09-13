import React from "react";
import Quotations4 from "@/components/Quotations4";
export default function Page({ params }) {
  return (
    <>
      <div>{params.quoteid}</div>
      <Quotations4 />
    </>
  );
}
