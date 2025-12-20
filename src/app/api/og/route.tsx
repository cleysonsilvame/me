import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

// Cache duration constants for better maintainability
const ONE_YEAR_SECONDS = 31536000 // 365 days
const ONE_DAY_SECONDS = 86400 // 24 hours

// Locale translations for consistency
const LOCALE_TRANSLATIONS = {
  'pt-br': 'PORTFÓLIO',
  en: 'PORTFOLIO',
} as const

/**
 * OG Image Generation API Route with Caching Strategy
 *
 * This route generates dynamic Open Graph images using @vercel/og.
 *
 * CACHING STRATEGY:
 * 1. Static Generation: For pages with static content, Vercel automatically
 *    caches the generated images at the edge.
 * 2. Revalidation: Uses stale-while-revalidate to serve cached images while
 *    regenerating in the background when content changes.
 * 3. Query-based Caching: Each unique combination of query parameters
 *    (title, description, locale) generates a cached version.
 *
 * COST OPTIMIZATION:
 * - Images are generated once and cached at Vercel's edge network
 * - Subsequent requests serve the cached version (no function invocation)
 * - Cache is invalidated only when query parameters change
 * - stale-while-revalidate ensures users get instant responses
 *
 * USAGE:
 * - Dynamic: /api/og?title=My%20Page&description=Description&locale=en
 * - The same parameters will always return the cached image
 * - Different parameters generate new cached variants
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Extract parameters with defaults
    const title =
      searchParams.get('title') ||
      'Cleyson Silva - Full Stack Web Developer | React & TypeScript'
    const description =
      searchParams.get('description') ||
      'Web Developer passionate about creating innovative solutions'
    const locale = searchParams.get('locale') || 'en'

    // Generate the OG image using @vercel/og
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

          {/* Logo/Brand - Using the actual braces logo design */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* Braces Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '64px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-4px',
              }}
            >
              <span>&#123;</span>
              <span>&#125;</span>
            </div>
            {/* Site name */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#94a3b8',
                  letterSpacing: '0.5px',
                }}
              >
                cleysonsilva.me
              </div>
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '1000px',
            }}
          >
            <h1
              style={{
                fontSize: '68px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                lineHeight: 1.1,
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '28px',
                color: '#9ca3af',
                margin: 0,
                lineHeight: 1.5,
                maxWidth: '900px',
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '22px',
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
              {LOCALE_TRANSLATIONS[
                locale as keyof typeof LOCALE_TRANSLATIONS
              ] || LOCALE_TRANSLATIONS.en}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          // Cache for 1 year (immutable based on query params)
          // stale-while-revalidate allows serving cached version while regenerating
          'Cache-Control': `public, immutable, s-maxage=${ONE_YEAR_SECONDS}, stale-while-revalidate`,
          // Additional Vercel-specific caching
          'CDN-Cache-Control': `public, s-maxage=${ONE_YEAR_SECONDS}`,
          // Browser cache for 1 day
          'Vercel-CDN-Cache-Control': `max-age=${ONE_DAY_SECONDS}`,
        },
      },
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
