import { track } from '@vercel/analytics/server';

/** Crawlers, link previews (Slack, WhatsApp…) and scripts follow links too: they are sent on, never counted.
 *  The polite ones are kept out by robots.txt already. */
const NOT_A_PERSON = /bot|crawl|spider|slurp|preview|scan|fetch|curl|wget|python|go-http|java\/|okhttp|headless|lighthouse|facebookexternalhit|whatsapp|telegram|discord|slack/i;

/** Counts a click in Vercel Web Analytics as `event`, from a function that then redirects. A failed count is never
 *  worth a lost visitor: it fails quietly. */
export async function count(request: Request, event: string, properties: Record<string, string>) {
  const agent = request.headers.get('user-agent') ?? '';
  if (!agent || NOT_A_PERSON.test(agent)) return;
  // Left to itself the SDK sends the event to VERCEL_URL, the deployment's own *.vercel.app address, which Vercel
  // Authentication guards: 401, and the event is lost without a word (8 Oct 2026). The site's own domain is public.
  // Written out, not taken from the request: without security.allowedDomains Astro sees the host as http://localhost.
  process.env.VERCEL_WEB_ANALYTICS_ENDPOINT ||= 'https://www.nchova.com/_vercel/insights/event';
  try {
    await track(event, properties, { request });
  } catch {
    // Counting is not worth a lost visitor.
  }
}

export const redirect = (to: string) => new Response(null, { status: 302, headers: { Location: to, 'Cache-Control': 'no-store' } });
