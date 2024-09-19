import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MyComponent = () => {
  const query = useQuery();
  
  // 쿼리 파라미터 추출
  const paramValue = query.get('paramName'); // 'paramName' 대신 실제 파라미터 키 입력
  
  return (
    <div>
      <h1>Query Parameter Value: {paramValue}</h1>
    </div>
  );
};

export default MyComponent;