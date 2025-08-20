import React from 'react'

export default function CatagoryProducts(props:any) {
    console.log(props);
    const color=props.searchParams.color;

  return (
    <div>CatagoryProducts:color:{color}</div>
  )
}
