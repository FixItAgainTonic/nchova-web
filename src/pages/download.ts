import type { APIRoute } from 'astro';
import { DMG_URL } from '../config';
import { count, redirect } from '../lib/count';

/** Rendered on request: it counts the download (Vercel Web Analytics, event "Download", with the button it came from, and the
 *  creator whose link brought the visitor, if one did)
 *  and sends the browser on to the DMG. Sparkle's updates go straight to the DMG, so they are not counted here; GitHub
 *  counts every download of the file. A failed count never stops the download. */
export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  const partner = url.searchParams.get('partner');
  await count(request, 'Download', { from: url.searchParams.get('from') ?? 'link', ...(partner && { partner }) });
  return redirect(DMG_URL);
};
