"use server"
export async function PostMethod(url, body) {
  console.log(url)
    try{
    const postResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Your request body
    });

    const postresponseData = await postResponse.json();
   return postresponseData
      
    } catch (e){
      return { message: e.message };
    }
     
}

export async function GetMethod(url) {
  console.log("Get URL is", url)
    try{
    const getresponseData = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const getResponse = await getresponseData.json();
    
      return getResponse;
    } catch (e){
      return { message: e.message };
    }
     
}