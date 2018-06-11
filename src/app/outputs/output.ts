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
  merkle_proof: string;
}

export const MOCK_OUTPUTS: Output[] = [
    {
    root_key_id: '',
    key_id: '',
    n_child: 0,
    value: 0,
    status: '',
    height: 0,
   lock_height: 0,
   is_coinbase: false,
   block: '' ,
    merkle_proof: '',
  },
 {
    root_key_id: '',
    key_id: '',
    n_child: 1,
    value: 0,
    status: '',
    height: 0,
   lock_height: 0,
   is_coinbase: false,
   block: '' ,
    merkle_proof: '',
  },
];

