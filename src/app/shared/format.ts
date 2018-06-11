export function amountAsHr(in_amount: number, sigdigs: number): string {
  const GRIN_BASE = 1000000000;
  const amount = in_amount / GRIN_BASE;
  return amount.toFixed(sigdigs);
}
