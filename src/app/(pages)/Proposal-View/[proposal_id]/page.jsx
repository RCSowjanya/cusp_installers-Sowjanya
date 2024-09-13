
import React from "react";
import ProposalView from "@/components/ProposalView";
export default function Page({params}) {
 
  return (
   
       <ProposalView proposal_id={params.proposal_id}/>
       
  );
}
