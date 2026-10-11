import type { APIRoute } from 'astro';
import { PARTNERS } from '../../config';
import { path } from '../../i18n';
import { count, redirect } from '../../lib/count';

/** nchova.com/with/<slug>, the link a creator puts under their videos: counts the visit (event "Partner", with the
 *  slug) and lands on the home page in their language with ?with=<slug>, which the page reads to put their code in the
 *  checkout and their name on the downloads (src/scripts/site.ts). An unknown slug just goes home, uncounted. */
export const prerender = false;

export const GET: APIRoute = async ({ request, params }) => {
  const slug = params.partner?.toLowerCase() ?? '';
  const partner = PARTNERS[slug];
  if (!partner) return redirect('/');
  await count(request, 'Partner', { partner: slug });
  return redirect(`${path(partner.lang)}?with=${slug}`);
};
