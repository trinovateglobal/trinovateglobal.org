import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(new URL('./mono.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '100',
          justifyContent: 'flex-start',
          background: '#e2e2e2',
          // backgroundImage: `url(https://www.aungpyaephyo.com/og-bg.png)`,
        }}
      >
        <p
          style={{
            display: 'flex',
            fontSize: 100,
            fontFamily: 'Jetbrains Mono',
            letterSpacing: '-0.05em',
            fontWeight: '7000',
            fontStyle: 'normal',
            color: 'black',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
            paddingBottom: '145',
          }}
        >
          {postTitle}
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '432',
              height: '370',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(http://localhost:3000/icon.svg)',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                display: 'flex',
                fontSize: 30,
                fontFamily: 'Jetbrains Mono',
                letterSpacing: '-0.05em',
                fontWeight: '7000',
                fontStyle: 'normal',
                color: 'black',
                whiteSpace: 'pre-wrap',
              }}
            >
              Trinovate Global
            </p>
            <p
              style={{
                display: 'flex',
                fontSize: 30,
                fontFamily: 'Jetbrains Mono',
                letterSpacing: '-0.05em',
                fontWeight: '7000',
                fontStyle: 'normal',
                color: 'black',
                whiteSpace: 'pre-wrap',
              }}
            >
              Your Enterprise Solutions
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Jetbrains Mono',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
