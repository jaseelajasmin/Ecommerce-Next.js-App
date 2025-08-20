import { cookies,headers } from "next/headers";


export async function GET(request:Request){


const data=[{

id:1,
title:'t shirts'

}];
return Response.json({data})

}
//creating custom api

export async function POST(request:Request){
    const prod= await request.json();
    const cookieList=cookies();
      const tokenCookie=(await cookieList).get('authToken');
      console.log("token-cookie",tokenCookie,tokenCookie?.value);

const data=[{

id:1,
title:'t shirts',
prod:prod

}];
return Response.json({data})

}