# OG Image Examples

This directory contains examples of different approaches to generate Open Graph images in Next.js with Vercel.

## Files in this directory

### 1. `OG_IMAGE_IMPLEMENTATION.md`
Complete documentation of the current implementation including:
- Architecture overview
- Caching strategies
- Usage modes (dynamic, static, static files)
- Best practices
- Troubleshooting guide

### 2. `opengraph-image-static.example.tsx`
Example of a static OG image generation approach (alternative to the current dynamic approach).

**To use this example:**
1. Copy it to a page directory (e.g., `/app/[locale]/opengraph-image.tsx`)
2. Rename from `.example.tsx` to `.tsx`
3. Remove the dynamic metadata generation from that page's `generateMetadata` function
4. The image will be generated at build time and served as a static asset

## Current Implementation

The portfolio uses **Dynamic OG Image Generation** with the following setup:

### API Route: `/src/app/api/og/route.tsx`
- Generates images dynamically based on query parameters
- Uses Edge Runtime for optimal performance
- Implements aggressive caching (1 year cache with stale-while-revalidate)
- Supports internationalization (pt-br, en)

### Metadata Utility: `/src/lib/metadata.ts`
- Centralizes metadata generation logic
- Creates URLs for dynamic OG images
- Provides consistent OpenGraph and Twitter Card tags

### Usage in Pages:
```typescript
// Example from /app/[locale]/projects/page.tsx
export async function generateMetadata({ params }) {
  const { locale } = await params
  
  const metadata = {
    'pt-br': {
      title: 'Projetos - Cleyson Silva',
      description: 'Confira os projetos que construí até agora...',
    },
    en: {
      title: 'Projects - Cleyson Silva',
      description: 'Check out the projects I have built so far...',
    },
  }
  
  const meta = metadata[locale] || metadata.en
  
  return generateMeta(
    {
      title: meta.title,
      description: meta.description,
      url: '/projects',
    },
    locale,
  )
}
```

## Why Dynamic Generation?

The current implementation uses dynamic generation because:

1. **Flexibility**: Easy to update OG images by changing page content
2. **Internationalization**: Automatic support for multiple locales
3. **Efficient Caching**: Images are cached at Vercel's edge network
4. **Cost Effective**: With proper caching, minimal function invocations
5. **No Manual Work**: No need to create images manually

## Comparison of Approaches

| Approach | Generation | Cost | Updates | Best For |
|----------|-----------|------|---------|----------|
| **Dynamic API** (current) | Runtime (first request) + cache | Low (with caching) | Easy (change params) | Content that may change |
| **Static Build-time** | Build time | None at runtime | Requires rebuild | Rarely changing content |
| **Static Files** | Manual creation | None | Manual | Simple, unchanging images |

## Testing the Implementation

### Local Development
```bash
# Start dev server
npm run dev

# Test OG image generation
# Open: http://localhost:3000/api/og?title=Test&description=Testing&locale=en
```

### Production (Vercel)
```bash
# Deploy to Vercel
vercel

# Check OG images in pages:
# - https://your-domain.com/en (Home)
# - https://your-domain.com/en/projects (Projects)
# - https://your-domain.com/en/contact (Contact)

# Validate with tools:
# - Facebook: https://developers.facebook.com/tools/debug/
# - Twitter: https://cards-dev.twitter.com/validator
# - LinkedIn: https://www.linkedin.com/post-inspector/
```

## Monitoring

On Vercel Dashboard:
1. Go to Analytics → Functions
2. Monitor the `/api/og` function
3. Check invocation count
4. Verify caching is working (should see ~6 invocations total for initial generation)

## Need Help?

- Review `OG_IMAGE_IMPLEMENTATION.md` for detailed documentation
- Check Next.js docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
- Vercel OG docs: https://vercel.com/docs/functions/edge-functions/og-image-generation
- Open an issue if you encounter problems
