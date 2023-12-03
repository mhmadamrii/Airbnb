import Testing from '@/components/testing';

const handlePost = async () => {
  try {
    const data = await fetch('/api/todos', { method: 'POST' });
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* 
 *  testing doang
 *
 * */



export default async function Home() {
  const data = await handlePost();
  console.log(data);
  return (
    <div>
      <h1>homescreen</h1>
      <Testing />
    </div>
  );
}
