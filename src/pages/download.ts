import type { APIRoute } from 'astro';
import { DMG_URL } from '../config';
import { count, isNavigation, redirect } from '../lib/count';

/** Rendered on request: it counts the download (Vercel Web Analytics, event "Download", with the button it came from, and the
 *  creator whose link brought the visitor, if one did)
 *  and sends the browser on to the DMG. Only a browser following a link is counted; anything else is sent on all the same.
 *  This is every download, links from outside the site and visitors whose blocker stops the statistics included: the
 *  browser counts the clicks on the site's own buttons too (event "Download click", src/scripts/site.ts), on the same
 *  visitor as the page view. Sparkle's updates go straight to the DMG, so they are not counted here; GitHub counts every
 *  download of the file. A failed count never stops the download. */
export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  const partner = url.searchParams.get('partner');
  if (isNavigation(request)) {
    await count(request, 'Download', { from: url.searchParams.get('from') ?? 'link', ...(partner && { partner }) });
  }
  return redirect(DMG_URL);
};
