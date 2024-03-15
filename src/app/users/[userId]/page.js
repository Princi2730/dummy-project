import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const getUserList = getUsers();
  const users = await getUserList;
  const currentUser = props.params.userId;
  const userData = users[currentUser - 1];

  // console.log("props......", users[currentUser-1])
  return (
    <div>
      <h4>{userData.id}</h4>
      <h4>{userData.name}</h4>
      <h4>{userData.website}</h4>
    </div>
  );
}

 export async function generateStaticParams() {
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user=>({
        userId:user.id.toString()
    }))
 }
