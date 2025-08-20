import React from 'react'

export default function DynamicSearch(props:any) {
    console.log(props)
    const myParams:String[]=props.params.myParams;
    const catagory=myParams[0];
    const group=myParams[1];
    const brand=myParams[2];
  return (
    <div> DynamicSearch{catagory}</div>
  )
}
