export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="bg-blue-600">Specific Users</h1>
      {children}
    </section>
  );
}
