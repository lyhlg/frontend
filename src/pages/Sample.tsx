import React from 'react';

import { useCounter } from '@/hooks/useSample';

interface SampleProps {
  name: string;
}

const Sample: React.FC<SampleProps> = props => {
  const { name } = props;
  const { sampleStore, onRequest } = useCounter();
  const { list, isRequest } = sampleStore;

  if (isRequest) {
    return <p>JUST CALLING</p>;
  }

  return (
    <div>
      {name}
      <div>
        {list.map((item, i) => (
          <ul key={i.toString()}>
            <li>{item.id}</li>
            <li>{item.userId}</li>
            <li>{item.title}</li>
            <li>{item.completed}</li>
          </ul>
        ))}
      </div>
      <button type="button" onClick={onRequest}>
        Click
      </button>
    </div>
  );
};

export default Sample;
