# Testing OG Images Implementation

## Local Development Limitations

⚠️ **Important Note**: The OG image generation endpoint (`/api/og`) requires network access to CDN resources (cdn.jsdelivr.net) for font loading. In sandboxed environments without internet access, the endpoint will fail with network errors.

**This is expected behavior and does NOT indicate a problem with the implementation.**

The implementation will work correctly when:
- Deployed to Vercel (production or preview)
- Run in local development with internet access
- Tested with Vercel CLI (`vercel dev`)

## Testing Approaches

### 1. Production Testing (Recommended)

Deploy to Vercel and test the generated OG images:

```bash
# Deploy to Vercel
git push origin main

# Or create a preview deployment
vercel
```

Then validate OG images using:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### 2. Local Testing with Internet

If running on a machine with internet access:

```bash
npm run dev

# Test the endpoint
curl http://localhost:3000/api/og?title=Test&description=Testing&locale=en -o test-og-image.png

# Or visit in browser
open http://localhost:3000/api/og?title=Test&description=Testing&locale=en
```

### 3. Verify Metadata Tags

Even without generating images locally, you can verify the metadata is correctly configured:

```bash
npm run dev

# Check page source for OG tags
curl http://localhost:3000/en | grep -i "og:"
curl http://localhost:3000/en/projects | grep -i "og:"
curl http://localhost:3000/en/contact | grep -i "og:"
```

Expected output should include:
```html
<meta property="og:title" content="..."/>
<meta property="og:description" content="..."/>
<meta property="og:image" content="http://localhost:3000/api/og?title=..."/>
<meta property="og:url" content="..."/>
<meta property="og:type" content="website"/>
```

### 4. Code Review

Review the implementation files:

**Core Files:**
- `src/app/api/og/route.tsx` - OG image generation API
- `src/lib/metadata.ts` - Metadata utility functions
- `src/app/[locale]/layout.tsx` - Root layout with metadata
- `src/app/[locale]/projects/page.tsx` - Projects page metadata
- `src/app/[locale]/contact/page.tsx` - Contact page metadata

**Documentation:**
- `docs/OG_IMAGE_IMPLEMENTATION.md` - Complete implementation guide
- `docs/README.md` - Quick reference guide
- `docs/opengraph-image-static.example.tsx` - Alternative static approach

### 5. Build Verification

Verify the code builds successfully (note: will fail in sandboxed environment without Google Fonts access):

```bash
npm run build
```

In a properly configured environment, this should succeed and output:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /api/og                              ...      ...
├ ○ /[locale]                            ...      ...
├ ○ /[locale]/contact                    ...      ...
└ ○ /[locale]/projects                   ...      ...
```

## Expected Behavior on Vercel

Once deployed to Vercel, the OG image generation will:

1. **First Request** (per unique URL):
   - Function invocation
   - Image generation (~100-200ms)
   - Cache at edge network
   - Return generated image

2. **Subsequent Requests**:
   - Serve from edge cache (no function invocation)
   - Near-instant response (<50ms)
   - Cost: $0 (cached asset)

3. **Cache Behavior**:
   - Each unique combination of `title`, `description`, `locale` creates a cached variant
   - Cache persists across deployments
   - Cache headers ensure 1-year edge caching
   - `stale-while-revalidate` for optimal UX

## Monitoring on Vercel

After deployment, monitor the implementation:

1. **Vercel Dashboard → Analytics → Functions**
   - Check `/api/og` invocation count
   - Should see ~6 invocations for initial generation (3 pages × 2 locales)
   - Subsequent visits should serve from cache (no new invocations)

2. **Vercel Dashboard → Deployments → Function Logs**
   - Check for any errors in OG image generation
   - Verify successful image generation for all pages

3. **Cache Headers Verification**
   - Use browser DevTools → Network tab
   - Check response headers for `/api/og`
   - Should see: `Cache-Control: public, immutable, s-maxage=31536000, stale-while-revalidate`

## Troubleshooting

### Issue: "Network error" in local development

**Solution**: This is expected in sandboxed environments. Deploy to Vercel or run in environment with internet access.

### Issue: OG images not showing in social media

**Solution**: 
1. Clear cache in social media validators
2. Verify OG tags are in page HTML source
3. Check image URL is accessible
4. Wait 24-48 hours for cache to update

### Issue: High function invocations on Vercel

**Solution**:
1. Verify cache headers are set correctly
2. Check query parameters are stable (not using timestamps)
3. Ensure content doesn't change on every request
4. Review Vercel Analytics for patterns

## Success Criteria

The implementation is successful when:
- ✅ All pages have proper OG metadata tags
- ✅ OG image URLs are correctly formatted
- ✅ Images generate successfully on Vercel
- ✅ Cache headers are set for optimal performance
- ✅ Function invocations remain low after initial generation
- ✅ Social media platforms show correct previews
- ✅ Images display properly in all locales (pt-br, en)

## Additional Resources

- [Vercel OG Image Documentation](https://vercel.com/docs/functions/edge-functions/og-image-generation)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [@vercel/og Package](https://www.npmjs.com/package/@vercel/og)
- [Open Graph Protocol](https://ogp.me/)
