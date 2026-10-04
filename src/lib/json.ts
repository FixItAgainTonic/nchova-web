/** JSON safe to put inside a <script type="application/json">. */
export const json = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
