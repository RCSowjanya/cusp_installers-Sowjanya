"use server"
import { PostMethod, GetMethod } from "./ServerActions";

//Sending Email to Installer for Login
export async function LoginEmail(body) {
    console.log("triggered")
    const url = process.env.NEXT_LOGIN_EMAIL_URL
    const response = await PostMethod(url, body)
    return response;
}

//Checking OTP entered based on Email
export async function VerifyOTP(body){
    const url= process.env.NEXT_LOGIN_OTP_VERIFY
    const response= await PostMethod(url, body)
    return response;
}
export async function GetQuotesAll(body){
    console.log(body)
    const url= process.env.NEXT_GET_QUOTES_ALL
    const response= await PostMethod(url, body)
    console.log(response)
    return response;
}
export async function GetQuoteDetByID(body){
    console.log(body)
    const url= process.env.NEXT_QUOTE_DETAILS_BY_ID
    const response= await PostMethod(url, body)
    console.log(response)
    return response;
}
export async function GetFileURL(filename){
    console.log(filename)
    const url= process.env.NEXT_AWS_FILE_URL+"?fileKey="+filename
    console.log("URL IS", url)
    const response= await GetMethod(url)
    console.log(response)
    return response;
}
export async function SaveProposal(data){
    console.log(data)
    const url= process.env.NEXT_PROPOSAL_SAVE
    console.log("Proposal URL Is", url)
    const response= await PostMethod(url, data)
    console.log(response)
    return response
}
export async function SubmittedProposals(company_id){
    console.log(company_id)
    const url= process.env.NEXT_GET_SUBMITTED_PROPOSALS+"?company_id="+company_id
    const response= await GetMethod(url)
    console.log(response)
    return response;
}
export async function ProposalDetByID(proposal_id){
    console.log(proposal_id)
    const url= process.env.NEXT_PROPOSAL_DET_BY_ID+"?proposal_id="+proposal_id
    const response= await GetMethod(url)
    console.log(response)
    return response;
}
export async function ProposalView(proposal_id){
    console.log(proposal_id)
    const url= process.env.NEXT_PROPOSAL_VIEW+"?proposal_id="+proposal_id
    const response= await GetMethod(url)
    console.log(response)
    return response;
}