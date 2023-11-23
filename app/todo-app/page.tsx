import MyComponent from '@/components/MyComponent';
import axios from 'axios';

const handleAddData = async () => {
  'use server';
  try {
    const res = await axios.post('/api/feedbacks', {
      text: 'lorem post',
      rating: 5.5,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const handleGetData = async () => {
  try {
    const res = await axios.get('/api/feedbacks');
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default async function TodoApp() {
  const data = await handleGetData();
  console.log(data);
  return (
    <div>
      <h1>New post</h1>
      <MyComponent handleAddData={handleAddData} />
      <form action={handleAddData}>
        <input className="border border-red-400" />
        <button className="text-white">submit</button>
      </form>
    </div>
  );
}
