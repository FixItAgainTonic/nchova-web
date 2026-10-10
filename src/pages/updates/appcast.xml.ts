import type { APIRoute } from 'astro';
import feed from '../../updates/appcast.xml?raw';
import { count } from '../../lib/count';

/** Sparkle's feed, https://nchova.com/updates/appcast.xml: every installed copy has this address written inside it, so it
 *  never moves. Rendered on request so that each check is counted (Vercel Web Analytics, event "Update check", with the
 *  app's version): every running nchova asks once a day, so the checks of a day are about the copies in use that day.
 *  Nothing tells one Mac from another: the request carries what it always carried (the IP, and Sparkle's user agent
 *  "nchova/1.1.0 Sparkle/2.10.0"), and the count keeps the version alone, as the privacy page promises.
 *
 *  The feed itself is src/updates/appcast.xml, rewritten and pushed by the app's release script (scripts/release.sh in
 *  the nchova repository); every push redeploys, and the feed served is the one built in. Until 10 Oct 2026 it was a
 *  static file in public/updates/, which Vercel served without running anything, so nothing could count it. */
export const prerender = false;

/** Sparkle names the app and its version first ("nchova/1.1.0 Sparkle/2.10.0"): only those requests are counted. A
 *  browser, a feed reader or a crawler is served the feed and not counted. */
const APP = /^nchova\/(\S+)\s+Sparkle\//i;

/** As the static file had: Sparkle asks again every time, nothing is kept by the browser or the CDN. */
const HEADERS = { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=0, must-revalidate' };

/** The longest a check waits for its count: an update is never held up by the statistics. */
const COUNT_WAIT_MS = 1500;

export const GET: APIRoute = async ({ request }) => {
  const version = APP.exec(request.headers.get('user-agent') ?? '')?.[1];
  if (version) {
    await Promise.race([count(request, 'Update check', { version }), new Promise((done) => setTimeout(done, COUNT_WAIT_MS))]);
  }
  return new Response(feed, { headers: HEADERS });
};

export const HEAD: APIRoute = () => new Response(null, { headers: HEADERS });
