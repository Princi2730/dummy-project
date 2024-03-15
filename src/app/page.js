"use client"
import Image from "next/image";
import { useState } from "react";
// import styles from "./page.module.css";
// import { Roboto } from "next/font/google";
// import Link from "next/link";
// import { API_BASE_URL } from "@/config/constant";
// const roboto = Roboto({
//   weight:'100',
//   subsets:['latin'],
//   display:'swap'
// })

export default function Home() {
  // console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  const [file, setFile] = useState("");

const onSubmit = (e) => {
e.preventDefault();
console.log("File",file)
}

  return (
    <main>
      {/* {
        process.env.NODE_ENV== "development" ?
        <h1>you are development mode</h1>
        :
        <h1>you are on Production mode</h1>
      } */}
      {/* {API_BASE_URL}
      <Link href="/productlist">go to product list page</Link>
      <h1 className={roboto.className} >Hello everyone</h1> */}
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </main>
  );
}
