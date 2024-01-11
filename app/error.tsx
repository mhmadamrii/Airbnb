'use client';

import { useEffect } from 'react';

const ErrorState: React.FC<{ error: any }> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>Error</h1>
	  <h3>Hello:world</h3>
	  <h2>Errrrorfjkadfls</h2>
      <h1>Hello world</h1>
    </div>
  );
};

export default ErrorState;
