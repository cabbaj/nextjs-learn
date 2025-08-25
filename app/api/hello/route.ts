export async function GET() {
  return Response.json({ message: "hello" });
}

// about folder
export async function POST(req: Request) {
  const data = await req.json();
  const { name } = data; // { name } is destructuring access the name property directly

  return Response.json({ message: `User Name: ${name} has been created` });
}
