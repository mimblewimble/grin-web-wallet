import {TxLogEntry} from '../tx-listing/tx-log-entry';

const GRIN_BASE = 1000000000;

export function amountAsHr(in_amount: number, sigdigs: number): string {
  const amount = in_amount / GRIN_BASE;
  return amount.toFixed(sigdigs);
}

export function hrToAmount(in_amount: number) {
  return Math.trunc(in_amount * GRIN_BASE);
}

export function netChange(tx: TxLogEntry): number {
  return tx.amount_credited - tx.amount_debited;
}

export function parseDate(date_str: string): string {
  if (date_str === null) {
    return 'None';
  }
  return new Date(Date.parse(date_str)).toLocaleString();
}

export function parseConfirmed(tx: TxLogEntry): string {
  if (tx.confirmed) {
    return 'Confirmed';
  } else {
    return 'Unconfirmed';
  }
}

export function parseTxType(tx: TxLogEntry): string {
  switch (tx.tx_type) {
    case 'ConfirmedCoinbase' : return 'Coinbase';
    case 'TxReceived' : return 'Received';
    case 'TxSent' : return 'Sent';
    case 'TxReceivedCancelled' : return 'Cancelled Receive';
    case 'TxSentCancelled' : return 'Cancelled Send';
  }
  return 'Unknown';
}
