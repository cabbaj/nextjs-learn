// Server Component (Page)
import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const users = data.users;

  return (
    <>
      <div>
        {users.map((item: { id: number; firstName: string }) => (
          <Link key={item.id} href={`/users/${item.id}`}>
            <p>{item.firstName}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
