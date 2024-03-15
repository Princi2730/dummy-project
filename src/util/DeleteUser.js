"use client";
export default function DeleteUser(props) {
  const userId = props.id;
  console.log("props", userId);
  const deleteUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "delete",
    });
    result = await result.json();
    if(result.success){
        alert("deleted successfully")
    }
  };
  return <button onClick={deleteUser}>Delete</button>;
}
