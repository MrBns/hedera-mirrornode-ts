export type TMirrorNodeNftTransfer = {
  is_approval: boolean;
  receiver_account_id: null | string;
  sender_account_id: null | string;
  serial_number: number;
  token_id: null | string;
  [property: string]: unknown;
};

/**
 * StakingRewardTransfers
 *
 * StakingRewardTransfer, A staking reward transfer
 */
export type TMirrorNodeStakingRewardTransfer = {
  account: null | string;
  /**
   * The number of tinybars awarded
   */
  amount: number;
  [property: string]: unknown;
};

export type TMirrorNodeTokenTransfer = {
  account: null | string;
  amount: number;
  is_approval?: boolean;
  token_id: null | string;
  [property: string]: unknown;
};

export type TMirrorNodeTransfer = {
  account: null | string;
  amount: number;
  is_approval?: boolean;
  [property: string]: unknown;
};
