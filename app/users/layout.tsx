export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="bg-amber-600">All Users</h1>
      {children}
    </section>
  );
}
