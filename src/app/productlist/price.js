"use client"
export default function Price({price}) {
    return(
        <div>
            <button onClick={()=>alert(price)}>check Price</button>
        </div>
    )
}