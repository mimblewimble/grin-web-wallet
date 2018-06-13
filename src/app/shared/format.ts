const GRIN_BASE = 1000000000;

export function amountAsHr(in_amount: number, sigdigs: number): string {
  const amount = in_amount / GRIN_BASE;
  return amount.toFixed(sigdigs);
}

export function hrToAmount(in_amount: number){
  return Math.trunc(in_amount * GRIN_BASE);
}
