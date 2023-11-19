export default async function Root({
  searchParams,
  testing,
}: {
  searchParams: string;
  testing: string;
}) {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
