
export class TxLogEntry {
  id: number;
  tx_slate_id: string;
  tx_type: string;
  creation_ts: string;
  confirmation_ts: string;
  confirmed: boolean;
  num_inputs: number;
  num_outputs: number;
  amount_credited: number;
  amount_debited: number;
  fee: number;

}

