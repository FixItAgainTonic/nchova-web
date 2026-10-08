import type { APIRoute } from 'astro';
import { track } from '@vercel/analytics/server';
import { DMG_URL } from '../config';

/** Rendered on request, the one page that is: it counts the download (Vercel Web Analytics, event "Download", with the
 *  button it came from) and sends the browser on to the DMG. Sparkle's updates go straight to the DMG, so they are not
 *  counted here; GitHub counts every download of the file. A failed count never stops the download. */
export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  const from = url.searchParams.get('from') ?? 'link';
  // Left to itself the SDK sends the event to VERCEL_URL, the deployment's own *.vercel.app address, which Vercel
  // Authentication guards: 401, and the event is lost without a word (8 Oct 2026). The site's own domain is public.
  // Written out, not taken from `url`: without security.allowedDomains Astro sees the host as http://localhost.
  process.env.VERCEL_WEB_ANALYTICS_ENDPOINT ||= 'https://www.nchova.com/_vercel/insights/event';
  try {
    await track('Download', { from }, { request });
  } catch {
    // Counting is not worth a lost download.
  }
  return new Response(null, { status: 302, headers: { Location: DMG_URL, 'Cache-Control': 'no-store' } });
};
