import type { Metadata } from 'next'

export interface SiteMetadata {
  /** The page title - will be used in OG tags and browser title */
  title: string
  /** The page description - will be used in OG tags and meta description */
  description: string
  /** Optional page URL path (e.g., '/projects'). Defaults to root if not provided */
  url?: string
  /** Optional custom OG image URL. If not provided, will generate dynamic image via /api/og */
  image?: string
}

/**
 * Generates metadata for a page with proper OG image configuration
 * @param metadata - The metadata for the page
 * @param locale - The current locale (pt-br or en)
 * @returns Metadata object for Next.js
 * @example
 * ```typescript
 * generateMetadata(
 *   { title: 'My Page', description: 'Description', url: '/my-page' },
 *   'en'
 * )
 * ```
 */
export function generateMetadata(
  metadata: SiteMetadata,
  locale: string,
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const pageUrl = metadata.url ? `${baseUrl}${metadata.url}` : baseUrl

  // Use dynamic OG image generation for pages with dynamic content
  // The API route will cache the generated images efficiently
  const ogImageUrl =
    metadata.image || generateOgImageUrl(metadata, locale, baseUrl)

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: pageUrl,
      languages: {
        en: metadata.url ? `${baseUrl}/en${metadata.url}` : `${baseUrl}/en`,
        'pt-BR': metadata.url
          ? `${baseUrl}/pt-br${metadata.url}`
          : `${baseUrl}/pt-br`,
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: pageUrl,
      siteName: 'Cleyson Silva - Portfolio',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: locale === 'pt-br' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [ogImageUrl],
    },
  }
}

/**
 * Generates the OG image URL for dynamic image generation
 * @param metadata - The page metadata
 * @param locale - The current locale
 * @param baseUrl - The base URL of the site
 * @returns The full URL to the dynamic OG image
 */
function generateOgImageUrl(
  metadata: SiteMetadata,
  locale: string,
  baseUrl: string,
): string {
  return `${baseUrl}/api/og?title=${encodeURIComponent(metadata.title)}&description=${encodeURIComponent(metadata.description)}&locale=${locale}`
}

/**
 * Get site metadata by locale
 */
export function getSiteMetadata(locale: string) {
  const translations = {
    'pt-br': {
      title:
        'Cleyson Silva - Desenvolvedor Web Full Stack | React & TypeScript',
      description:
        'Desenvolvedor Web apaixonado por transformar ideias em soluções inovadoras e eficientes usando React, TypeScript e Docker.',
    },
    en: {
      title: 'Cleyson Silva - Full Stack Web Developer | React & TypeScript',
      description:
        'Web Developer passionate about transforming ideas into innovative and efficient solutions using React, TypeScript and Docker.',
    },
  }

  return translations[locale as keyof typeof translations] || translations.en
}
