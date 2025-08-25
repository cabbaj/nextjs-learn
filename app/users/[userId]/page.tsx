import { notFound } from "next/navigation";

const fetchUser = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();

  if (!user.id) {
    return null;
  }

  return user;
};

export default async function User({
  params,
}: {
  params: Promise<{ userId: number }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <>
      <div>
        <p>
          <strong>{user.id}</strong>
        </p>
        <p>
          <strong>{user.firstName}</strong>
        </p>
      </div>
    </>
  );
}
