export class SendTXArgs {
  amount = 0;
  minimum_confirmations = 1;
  method = 'http'
  dest = 'http://';
  max_outputs = 500;
  num_change_outputs = 1;
  selection_strategy_is_use_all = true;
  fluff = true;
}

