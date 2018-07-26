import {TxLogEntry} from './model/tx-log-entry';
import {Injectable} from '@angular/core';

const GRIN_BASE = 1000000000;

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
  }

  amountAsHr(in_amount: number, sigdigs: number): string {
    const amount = in_amount / GRIN_BASE;
    return amount.toFixed(sigdigs);
  }

  hrToAmount(in_amount: number) {
    return Math.trunc(in_amount * GRIN_BASE);
  }

  netChange(tx: TxLogEntry): number {
    if (tx == null) {
      return 0;
    }
    return tx.amount_credited - tx.amount_debited;
  }

  parseDate(date_str: string): string {
    if (date_str === null) {
      return 'None';
    }
    return new Date(Date.parse(date_str)).toLocaleString();
  }

  parseConfirmed(tx: TxLogEntry): string {
    if (tx == null) {
      return '';
    }
    if (tx.confirmed) {
      return 'Confirmed';
    } else {
      return 'Unconfirmed';
    }
  }

  parseTxType(tx: TxLogEntry): string {
    if (tx == null) {
      return '';
    }
    switch (tx.tx_type) {
      case 'ConfirmedCoinbase' :
        return 'Coinbase';
      case 'TxReceived' :
        return 'Received';
      case 'TxSent' :
        return 'Sent';
      case 'TxReceivedCancelled' :
        return 'Cancelled Receive';
      case 'TxSentCancelled' :
        return 'Cancelled Send';
    }
    return 'Unknown';
  }
}
