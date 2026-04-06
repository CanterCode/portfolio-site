import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Joshua Canterbury | Software Engineer
        </div>
        <div
          style={{
            fontSize: '40px',
            color: '#aaa',
            textAlign: 'center',
          }}
        >
          Node.js & React Developer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
