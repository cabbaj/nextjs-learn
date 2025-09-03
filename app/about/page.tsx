const createUser = async () => {
  // server component need full URL
  // this is use from .env file
  const res = await fetch(`${process.env.URL}/api/hello`, {
    method: "POST",
    body: JSON.stringify({ name: "john" }), // define request body, and convert to JSON string with stringify bc cant send object
  });
  const data = await res.json();

  return data;
};

export default async function Page() {
  const data = await createUser();
  console.log(data);

  return <div>{data.message}</div>;
}
