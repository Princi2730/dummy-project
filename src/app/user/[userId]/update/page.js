"use client"
import { useEffect, useState } from "react"
import './../../../style.css'

export default function Page({params}) {
    let id = params.userId

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    useEffect(()=>{
        const getUserDetails= async () => {
            let data = await fetch ("http://localhost:3000/api/users/"+id);
            data = await data.json();
            console.log("ddddaaaaataaaaaaa", data.result)
            setEmail(data.result.email)
            setAge(data.result.age)
            setName(data.result.name)
        }

        getUserDetails();
    }, [id]); // Only re-run the effect if 'id' changes

    const updateUser = async () => {
        let result = await fetch("http://localhost:3000/api/users/"+id,{
            method:"PUT",
            body: JSON.stringify({ name, age, email })
        });
        result = await result.json();
        console.log("result",result)
        if(result.success){
            alert("user information updated")
        }else{
            alert("please try again")
        }
    }

    return(
        <div className="add-user">
            <h2>Update user details</h2>
            <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} className="input-field"/>
            <input type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} className="input-field"/>
            <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-field"/>
            <button onClick={updateUser} className="btn">Update user</button>
        </div>
    )
}