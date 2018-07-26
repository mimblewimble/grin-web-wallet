
export class OutputsResponse {
  validated_against_node: boolean;
  outputs: Output[];
}

export class Output {
  root_key_id: string;
  key_id: string;
  n_child: number;
  value: number;
  status: string;
  height: number;
  lock_height: number;
  is_coinbase: boolean;
  block: string;
  tx_log_entry: number;
}

