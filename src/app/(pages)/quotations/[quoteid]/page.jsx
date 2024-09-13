
import React from "react";
import QuotationView from "@/components/QuotaionView";
export default function Page({params}) {
const s3baseurl=process.env.NEXT_S3_BASE_URL
  return (
   <>
    <QuotationView quoteid={params.quoteid} s3url={s3baseurl}/>
   </>
      
       
  );
}
