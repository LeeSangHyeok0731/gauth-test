import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MyComponent = () => {
  const query = useQuery();
  const code = query.get('code');

  useEffect(() => {
    if (code) {
      // 'code' 값을 JSON으로 API에 POST 요청
      const postCode = async () => {
        try {
          const response = await fetch('https://daram-gsm.kro.kr/api/login/gauth/code', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code }),
          });

          const result = await response.json();
          console.log('Response:', result);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      postCode();
    }
  }, [code]);

  return (
    <div>
      <h1>Code: {code}</h1>
    </div>
  );
};

export default MyComponent;

