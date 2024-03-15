"use client"
import { useState } from "react"
import "../style.css"

export default function Page() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

const addUser = async () => {
    try {
        let response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify({ name, age, email }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.success) {
            alert("New user added");
        } else {
            alert("Some error");
        }

        console.log("response", data);
    } catch (error) {
        console.error("Error adding user:", error);
        alert("Error adding user");
    }
};


    return(
        <div className="add-user">
            <h1>Add new user</h1>
            <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} className="input-field"/>
            <input type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} className="input-field"/>
            <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-field"/>
            <button onClick={addUser} className="btn">Add user</button>
        </div >
    )
}