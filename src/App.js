import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MyComponent = () => {
  const query = useQuery();

  // 'code' 파라미터 값 추출
  const code = query.get('code');

  return (
    <div>
      <h1>Code: {code}</h1>
    </div>
  );
};

export default MyComponent;
