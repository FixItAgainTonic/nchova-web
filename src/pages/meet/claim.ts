import type { APIRoute } from 'astro';
import { CHECKOUT_URL, MEET_CODE } from '../../config';
import { count, redirect } from '../../lib/count';

/** "Get your free licence" on nchova.com/meet: counts the claim (event "Voucher") and opens the Pro checkout with the
 *  event's code already in, so it comes to €0. */
export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  await count(request, 'Voucher', { code: MEET_CODE });
  return redirect(`${CHECKOUT_URL}?discount_code=${MEET_CODE}`);
};
