import type { APIRoute } from 'astro';
import { CHECKOUT_URL, IRONHACK_CODE } from '../../config';
import { count, redirect } from '../../lib/count';

/** nchova.com/ironhack/claim, the link for colleagues at Ironhack: counts the claim (event "Voucher", with the code)
 *  and opens the Pro checkout with their code already in. No page of its own. */
export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  await count(request, 'Voucher', { code: IRONHACK_CODE });
  return redirect(`${CHECKOUT_URL}?discount_code=${IRONHACK_CODE}`);
};
