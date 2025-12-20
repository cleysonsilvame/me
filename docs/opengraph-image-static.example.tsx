import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cleyson Silva - Portfolio Home'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

/**
 * Static OG Image Example (Alternative Approach)
 * 
 * This is an alternative implementation using static OG image generation.
 * 
 * WHEN TO USE THIS APPROACH:
 * - Page content rarely changes
 * - You want zero runtime cost
 * - You prefer build-time generation
 * 
 * HOW IT WORKS:
 * - Generated once at build time
 * - Served as static asset
 * - No function invocations at runtime
 * - Cache is permanent until next deployment
 * 
 * TO ENABLE THIS:
 * 1. Rename this file from .example to .tsx
 * 2. Place it in the page directory (e.g., /app/[locale]/opengraph-image.tsx)
 * 3. Remove the dynamic metadata that references /api/og
 * 
 * NOTE: This is kept as .example to avoid conflicts with the dynamic approach
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          padding: '80px 100px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
        />

        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            CS
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 1,
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            Cleyson Silva
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#9ca3af',
              margin: 0,
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            Web Developer passionate about transforming ideas into innovative
            solutions
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '24px',
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>🌐</span>
            <span>cleysonsilva.me</span>
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            PORTFOLIO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
