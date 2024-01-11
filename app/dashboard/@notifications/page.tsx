const getData = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10',
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Notifications() {
  const data = await getData();

  console.log('data', data);
  return (
    <main>
      <span>Some notifications</span>
      <span className="text-base text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
        reiciendis dolor quibusdam nobis, exercitationem reprehenderit
        temporibus eligendi nemo odit nostrum blanditiis rem dignissimos.
        Deserunt explicabo nihil perspiciatis, minus sit iusto.
      </span>
    </main>
  );
}
