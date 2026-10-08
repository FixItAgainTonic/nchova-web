import type { APIRoute } from 'astro';
import { CHECKOUT_URL } from '../config';
import { count, redirect } from '../lib/count';

/** nchova.com/meet, the link on the card Rudy hands out at events (from 8 Oct 2026): it counts the scan (event
 *  "Voucher") and opens the Pro checkout with the event's code already in. The code is a 100% discount on Polar,
 *  with its own limit and end date there; for another event, another code here. */
export const prerender = false;

const CODE = 'MEETNCHOVA';

export const GET: APIRoute = async ({ request }) => {
  await count(request, 'Voucher', { code: CODE });
  return redirect(`${CHECKOUT_URL}?discount_code=${CODE}`);
};
