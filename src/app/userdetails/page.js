"use client"

import Script from 'next/script'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Script
      src='/location.js'
      onLoad={()=>{
        console.log("file Loaded")
      }}
       />
    </div>
  )
}

export default Page