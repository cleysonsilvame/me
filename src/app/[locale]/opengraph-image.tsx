/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: { locale: string }
}) {
  try {
    const locale = params.locale || 'en'

    const metadata = {
      'pt-br': {
        title:
          'Cleyson Silva - Desenvolvedor Web Full Stack | React & TypeScript',
        description:
          'Desenvolvedor Web apaixonado por criar soluções inovadoras',
        footer: 'PORTFÓLIO',
      },
      en: {
        title: 'Cleyson Silva - Full Stack Web Developer | React & TypeScript',
        description:
          'Web Developer passionate about creating innovative solutions',
        footer: 'PORTFOLIO',
      },
    }

    const { title, description, footer } =
      metadata[locale as keyof typeof metadata]
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

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '20px',
              width: '100%',
            }}
          >
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
                borderRadius: '50%',
                overflow: 'hidden',
                width: '64px',
                height: '64px',
              }}
            >
              <img
                alt="Cleyson Silva"
                src="https://cleysonsilva.dev/me.jpg"
                width={64}
              />
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
              {footer}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
