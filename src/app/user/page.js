import Link from "next/link";
import "./../style.css"
import DeleteUser from "@/util/DeleteUser";

async function getUsers() {
  const apiUrl = process.env.URL;
  let data = await fetch(apiUrl + "/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const users = await getUsers();
  console.log("users", users);
  return (
    <div>
      <h3>Hello everyone</h3>
      {users.map((item) => (
        <div className="user-item" key={item.id}>
          <span><Link href={`/user/${item.id}`}>{item.name}</Link></span>
          <span><Link href={`/user/${item.id}/update`}>Edit</Link></span>
          <DeleteUser id={item.id}/>
        </div>
      ))}
    </div>
  );
}
