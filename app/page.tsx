import DataLorem from '@/components/DataLorem';
import Button from '@/components/button';
import { Suspense } from 'react';

export default function Root() {
  return (
    <div>
      <h1>Hello world</h1>
      <button disabled data-testid="my-btn-test">
        click me
      </button>
      <p className="blue" data-testid="paragraph-blue">
        our paragraph
      </p>

      <div data-testid="my-el">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          accusantium facere odit, expedita cupiditate perspiciatis dolore quos
          illum, quibusdam animi nemo, corrupti ratione assumenda pariatur amet
          eius veniam laudantium delectus.
        </p>
        <Button title="Submit here!" />
      </div>

      <div>
        <h1 className="text-2xl">List datas</h1>
        <Suspense fallback={<h1>Loading stream....</h1>}>
          <DataLorem />
        </Suspense>
      </div>
    </div>
  );
}

// tutorial from here: https://www.youtube.com/watch?v=u6PQ5xZAv7Q
