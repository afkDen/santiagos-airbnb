import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1C130D 0%, #2A1E16 60%, #3D2410 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          border: '4px solid #D4AF37',
        }}
      >
        <div
          style={{
            fontSize: 104,
            color: '#F3DC7B',
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          S
        </div>
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.22em',
            color: '#FAF6F0',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginTop: -4,
          }}
        >
          SANTIAGO&apos;S
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
