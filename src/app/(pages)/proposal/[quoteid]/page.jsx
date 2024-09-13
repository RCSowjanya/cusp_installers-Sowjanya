import React from "react";
import { GetQuoteDetByID } from "@/app/functions/ServerFunctions";
import QuotationProposal from "@/components/QuotationProposal";
export default async function Page({ params }) {
let quotedet=[]
console.log("qid", params.quoteid)
try {
    const payload = { customer_id: params?.quoteid||0 }

    const response= await GetQuoteDetByID(payload)
    console.log(response)
    if (response.status===200){

        quotedet= response.data
        console.log(quotedet)
    }else{
        quotedet=[]
    }
} catch (error) {
    quotedet=[]
}



  return (
    <>
      <QuotationProposal quotedetails={quotedet} />
    </>
  );
}
