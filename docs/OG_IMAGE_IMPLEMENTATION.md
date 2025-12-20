# Open Graph (OG) Image Generation - Implementation Guide

This document explains the implementation of dynamic OG image generation for the portfolio website using Vercel's OG Image Generation API.

## Overview

The implementation provides efficient and cost-effective OG image generation with smart caching strategies to minimize function invocations and optimize performance.

## Architecture

### 1. Dynamic API Route (`/src/app/api/og/route.tsx`)

The main OG image generation endpoint that:
- Runs on the Edge Runtime for optimal performance
- Accepts query parameters: `title`, `description`, `locale`
- Generates images using `@vercel/og` (Next.js ImageResponse)
- Implements aggressive caching strategies

### 2. Metadata Utilities (`/src/lib/metadata.ts`)

Centralized metadata generation utility that:
- Creates consistent metadata across all pages
- Generates URLs for dynamic OG images
- Provides internationalization support
- Ensures proper OpenGraph and Twitter Card tags

### 3. Page-Level Metadata

Each page exports a `generateMetadata` function that:
- Provides page-specific metadata
- Uses the shared utilities for consistency
- Supports internationalization (pt-br, en)

## Caching Strategy

### How It Works

1. **Query-Based Caching**: Each unique combination of query parameters generates a cached image variant
   - Example: `/api/og?title=Projects&locale=en` creates a unique cached image
   - The same parameters always serve the cached version

2. **Edge Caching with Vercel**:
   ```typescript
   headers: {
     'Cache-Control': 'public, immutable, s-maxage=31536000, stale-while-revalidate',
     'CDN-Cache-Control': 'public, s-maxage=31536000',
     'Vercel-CDN-Cache-Control': 'max-age=86400',
   }
   ```
   - `s-maxage=31536000`: Cache at CDN for 1 year (images are immutable based on query params)
   - `stale-while-revalidate`: Serve cached version while regenerating in background
   - `immutable`: Browser and CDN know the image won't change for same parameters

3. **Cost Optimization**:
   - First request: Function invocation → Image generation → Cache at edge
   - Subsequent requests: Serve from edge cache (no function invocation)
   - Different query params create new cache entries
   - Cache persists across deployments

### Cache Invalidation

To update an image, change the query parameters (typically by updating page content):
```typescript
// Old: /api/og?title=Old%20Title&description=Old&locale=en
// New: /api/og?title=New%20Title&description=Updated&locale=en
// This creates a new cache entry
```

## Usage Modes

### Mode 1: Dynamic OG Images (Current Implementation)

**When to use**: Pages with dynamic content that may change

```typescript
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  
  return generateMeta(
    {
      title: 'My Page Title',
      description: 'Page description',
      url: '/my-page',
    },
    locale,
  )
}
```

**Benefits**:
- Automatic caching based on content
- No manual image creation needed
- Internationalization support
- Easy content updates

**Caching**: Automatic based on query parameters

### Mode 2: Static OG Images (Alternative)

**When to use**: Pages with content that rarely/never changes

Create static images in the page directory:
```
/app/[locale]/projects/opengraph-image.tsx
```

```typescript
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Projects Page'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div>Your static design here</div>
    ),
    { ...size }
  )
}
```

**Benefits**:
- Generated once at build time
- Zero runtime cost
- Served as static assets

**Caching**: Permanent, regenerated only on redeployment

### Mode 3: Static Image Files (Simplest)

**When to use**: Simple images that don't need dynamic generation

Place image files directly in the page directory:
```
/app/[locale]/projects/opengraph-image.jpg
```

**Benefits**:
- No generation needed
- Simple to implement
- Zero runtime cost

**Caching**: Permanent static assets

## Vercel-Specific Features

### Edge Runtime

```typescript
export const runtime = 'edge'
```

- Runs on Vercel's Edge Network (globally distributed)
- Lower latency for users worldwide
- Faster cold starts compared to serverless functions
- Optimized for OG image generation

### Automatic Optimization

Vercel automatically:
- Compresses and optimizes generated images
- Serves images from nearest edge location
- Handles cache headers properly
- Provides analytics for function invocations

### Cost Considerations

On Vercel:
- **Hobby Plan**: 1,000 Edge Function invocations/month (free)
- **Pro Plan**: Unlimited Edge Functions included

With proper caching:
- 3 pages × 2 locales = 6 unique OG images
- Each image generated once, then cached
- ~6 function invocations total
- All subsequent requests serve from cache

## Best Practices

### 1. Use Dynamic Generation for Content That Changes

Current implementation is optimal for:
- Portfolio pages that may be updated
- Content driven by CMS
- Internationalized content

### 2. Optimize Query Parameters

Keep URLs clean and meaningful:
```typescript
// Good: Descriptive and clean
/api/og?title=Projects&description=My%20Projects&locale=en

// Avoid: Unnecessary complexity
/api/og?title=Projects&description=My%20Projects&locale=en&timestamp=123456
```

### 3. Monitor Function Invocations

In Vercel Dashboard:
- Check Analytics → Functions
- Monitor invocation count
- Ensure caching is working
- Look for unexpected regenerations

### 4. Test Locally

```bash
npm run dev
# Visit: http://localhost:3000/api/og?title=Test&description=Test&locale=en
```

### 5. Validate OG Tags

Use tools like:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Environment Variables

**No configuration required!** The implementation automatically detects the correct URL for each environment.

### Automatic Detection

The code automatically detects the correct base URL:

1. **Local Development**: `http://localhost:3000`
2. **Vercel Preview**: `https://your-app-git-branch-user.vercel.app` (from `VERCEL_URL`)
3. **Vercel Production**: `https://your-domain.com` (from `VERCEL_URL` or custom domain)

### Manual Override (Optional)

Only needed if you want to override the automatic detection:

**Local Development** - Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Vercel Production** - Set in Vercel Dashboard → Settings → Environment Variables:
```bash
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

### How It Works

The implementation checks in this priority order:
1. `NEXT_PUBLIC_SITE_URL` (if explicitly set)
2. `VERCEL_URL` (automatically provided by Vercel, prefixed with `https://`)
3. `http://localhost:3000` (fallback for local development)

This ensures correct URLs in all environments without manual configuration.

## Migration Guide

### To Switch to Static OG Images

1. Create `opengraph-image.tsx` in each page directory
2. Remove dynamic metadata generation from pages
3. Remove `/api/og` route if no longer needed

### To Use Static Image Files

1. Create/export images (1200×630 px)
2. Place in page directories as `opengraph-image.jpg`
3. Remove metadata generation code

## Troubleshooting

### Images Not Updating

1. Check if query parameters changed
2. Verify cache headers in DevTools
3. Clear cache: Redeploy on Vercel
4. Force refresh: Ctrl+Shift+R in browser

### High Function Invocations

1. Check Vercel Analytics
2. Verify cache headers are set correctly
3. Ensure query parameters are stable
4. Check for cache-busting URL params

### Images Not Displaying

1. Validate OG tags in page source
2. Check image URL is accessible
3. Verify image dimensions (1200×630)
4. Test with social media validators

## Related Documentation

- [Vercel OG Image Generation](https://vercel.com/docs/functions/edge-functions/og-image-generation)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Open Graph Protocol](https://ogp.me/)
- [@vercel/og Package](https://www.npmjs.com/package/@vercel/og)

## Summary

This implementation provides:
✅ Efficient dynamic OG image generation
✅ Smart caching with stale-while-revalidate
✅ Cost-effective (minimal function invocations)
✅ Internationalization support
✅ Easy content updates
✅ Edge runtime for global performance
✅ SEO optimization for social media sharing

The caching strategy ensures that:
- Images are generated once per unique content
- Subsequent requests serve cached versions
- Function invocations are minimized
- User experience is optimized with instant responses
