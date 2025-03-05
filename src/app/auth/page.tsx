import React from 'react';

const AuthPage = () => {
  return (
    <div>
      <iframe
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`}
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default AuthPage;