import type { TMirrorNodeAssessedCustomFee } from "./Fees";
import type {
  TMirrorNodeNftTransfer,
  TMirrorNodeStakingRewardTransfer,
  TMirrorNodeTokenTransfer,
  TMirrorNodeTransfer,
} from "./Transfer";

/**
 * TransactionTypes
 */
export type TMirrorNodeTransactionTypes =
  | "CONSENSUSCREATETOPIC"
  | "CONSENSUSDELETETOPIC"
  | "CONSENSUSSUBMITMESSAGE"
  | "CONSENSUSUPDATETOPIC"
  | "CONTRACTCALL"
  | "CONTRACTCREATEINSTANCE"
  | "CONTRACTDELETEINSTANCE"
  | "CONTRACTUPDATEINSTANCE"
  | "CRYPTOADDLIVEHASH"
  | "CRYPTOAPPROVEALLOWANCE"
  | "CRYPTOCREATEACCOUNT"
  | "CRYPTODELETE"
  | "CRYPTODELETEALLOWANCE"
  | "CRYPTODELETELIVEHASH"
  | "CRYPTOTRANSFER"
  | "CRYPTOUPDATEACCOUNT"
  | "ETHEREUMTRANSACTION"
  | "FILEAPPEND"
  | "FILECREATE"
  | "FILEDELETE"
  | "FILEUPDATE"
  | "FREEZE"
  | "NODE"
  | "NODECREATE"
  | "NODEDELETE"
  | "NODESTAKEUPDATE"
  | "NODEUPDATE"
  | "SCHEDULECREATE"
  | "SCHEDULEDELETE"
  | "SCHEDULESIGN"
  | "SYSTEMDELETE"
  | "SYSTEMUNDELETE"
  | "TOKENAIRDROP"
  | "TOKENASSOCIATE"
  | "TOKENBURN"
  | "TOKENCANCELAIRDROP"
  | "TOKENCLAIMAIRDROP"
  | "TOKENCREATION"
  | "TOKENDELETION"
  | "TOKENDISSOCIATE"
  | "TOKENFEESCHEDULEUPDATE"
  | "TOKENFREEZE"
  | "TOKENGRANTKYC"
  | "TOKENMINT"
  | "TOKENPAUSE"
  | "TOKENREJECT"
  | "TOKENREVOKEKYC"
  | "TOKENUNFREEZE"
  | "TOKENUNPAUSE"
  | "TOKENUPDATE"
  | "TOKENUPDATENFTS"
  | "TOKENWIPE"
  | "UNCHECKEDSUBMIT"
  | "UNKNOWN"
  | "UTILPRNG";

/**
 * The transaction account balance modification type.
 */
export type TMirrorNodeBalanceModificationType = "credit" | "debit";

/**
 * Mirronode  Transactions type
 */

export type TMirrorNodeTransaction = {
  bytes?: null | string;
  charged_tx_fee?: number;
  consensus_timestamp?: string;
  entity_id?: null | string;
  max_custom_fees?: TMirrorNodeCustomFeeLimit[];
  max_fee?: string;
  memo_base64?: null | string;
  name?: TMirrorNodeTransactionTypes;
  nft_transfers?: TMirrorNodeNftTransfer[];
  node?: null | string;
  nonce?: number;
  parent_consensus_timestamp?: null | string;
  result?: string;
  scheduled?: boolean;
  staking_reward_transfers?: TMirrorNodeStakingRewardTransfer[];
  token_transfers?: TMirrorNodeTokenTransfer[];
  transaction_hash?: string;
  transaction_id?: string;
  transfers?: TMirrorNodeTransfer[];
  valid_duration_seconds?: string;
  valid_start_timestamp?: string;
  [property: string]: unknown;
};

/**
 * CustomFeeLimit
 */
export type TMirrorNodeCustomFeeLimit = {
  account_id?: null | string;
  amount?: number;
  denominating_token_id?: null | string;
  [property: string]: unknown;
};

/**
 * TransactionDetails
 *
 * TransactionDetail
 *
 * Transaction
 */
export type TMirrorNodeTransactionDetails = {
  bytes?: null | string;
  charged_tx_fee?: number;
  consensus_timestamp?: string;
  entity_id?: null | string;
  max_custom_fees?: TMirrorNodeCustomFeeLimit[];
  max_fee?: string;
  memo_base64?: null | string;
  name?: TMirrorNodeTransactionTypes;
  nft_transfers?: TMirrorNodeNftTransfer[];
  node?: null | string;
  nonce?: number;
  parent_consensus_timestamp?: null | string;
  result?: string;
  scheduled?: boolean;
  staking_reward_transfers?: TMirrorNodeStakingRewardTransfer[];
  token_transfers?: TMirrorNodeTokenTransfer[];
  transaction_hash?: string;
  transaction_id?: string;
  transfers?: TMirrorNodeTransfer[];
  valid_duration_seconds?: string;
  valid_start_timestamp?: string;
  assessed_custom_fees?: TMirrorNodeAssessedCustomFee[];
  [property: string]: unknown;
};
