async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

export default async function Page({ params }) {
  console.log("params", params.userId);
  const user = await getUsers(params.userId);
  console.log("user", user);
  return (
    <div>
      <h3>Hiiiiiiiiiiii</h3>
      <div>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <h3>{user.email}</h3>
      </div>
    </div>
  );
}