'use client';

export default function MyComponent({ handleAddData }: { handleAddData: any }) {
  return (
    <div>
      <button
        onClick={handleAddData}
        className="btn rounded bg-sky-400 p-3 text-white"
      >
        Submit here
      </button>
    </div>
  );
}
