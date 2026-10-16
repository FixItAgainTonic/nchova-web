import type { APIRoute } from 'astro';
import { CHECKOUT_URL, PRESS_CODE } from '../../config';
import { count, redirect } from '../../lib/count';

/** nchova.com/press/claim, the link in the emails to the press: counts the claim (event "Voucher", with the code) and
 *  opens the Pro checkout with their code already in, so it comes to €0. No page of its own. */
export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  await count(request, 'Voucher', { code: PRESS_CODE });
  return redirect(`${CHECKOUT_URL}?discount_code=${PRESS_CODE}`);
};
