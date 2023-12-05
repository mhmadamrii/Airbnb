const getData = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10',
    );
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function DataLorem() {
  const data = await getData();
  return (
    <div>
      <h1 className="text-2xl">List datas</h1>
      {data.map(
        (
          item: { userId: number; title: string; body: string; id: number },
          idx: number,
        ) => (
          <div key={idx}>
            <h1 className="text-red-500">{item.title}</h1>
          </div>
        ),
      )}
    </div>
  );
}
