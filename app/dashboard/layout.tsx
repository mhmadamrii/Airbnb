export default function DashbaordLayout({
  children,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  console.log('mounted');
  return (
    <section className="flex justify-between">
      <div className="h-screen w-[400px] bg-lime-600 p-3">{notifications}</div>
      <div>{children}</div>
      <div className="h-screen w-[400px] bg-orange-800 p-3">{revenue}</div>
    </section>
  );
}
