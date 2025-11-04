/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityId } from "./EntityId";
import type { Key } from "./Key";
import type { ServiceEndpoint } from "./ServiceEndpoint";
import type { ServiceEndpoints } from "./ServiceEndpoints";
import type { TimestampRange } from "./TimestampRange";
import type { TimestampRangeNullable } from "./TimestampRangeNullable";
export type NetworkNode = {
  admin_key: Key;
  /**
   * Whether the node wants to receive staking rewards or not.
   */
  decline_reward: boolean | null;
  /**
   * a memo associated with the address book
   */
  description: string | null;
  file_id: EntityId;
  grpc_proxy_endpoint: ServiceEndpoint;
  /**
   * The maximum stake (rewarded or not rewarded) this node can have as consensus weight
   */
  max_stake: number | null;
  /**
   * memo
   */
  memo: string | null;
  /**
   * The minimum stake (rewarded or not rewarded) this node must reach before having non-zero consensus weight
   *
   */
  min_stake: number | null;
  node_account_id: EntityId;
  /**
   * An identifier for the node
   */
  node_id: number;
  /**
   * hex encoded hash of the node's TLS certificate
   */
  node_cert_hash: string | null;
  /**
   * hex encoded X509 RSA public key used to verify stream file signature
   */
  public_key: string | null;
  /**
   * The total tinybars earned by this node per whole hbar in the last staking period
   */
  reward_rate_start: number | null;
  service_endpoints: ServiceEndpoints;
  /**
   * The node consensus weight at the beginning of the staking period
   */
  stake: number | null;
  /**
   * The sum (balance + stakedToMe) for all accounts staked to this node with declineReward=true at the
   * beginning of the staking period
   *
   */
  stake_not_rewarded: number | null;
  /**
   * The sum (balance + staked) for all accounts staked to the node that are not declining rewards at the
   * beginning of the staking period
   *
   */
  stake_rewarded: number | null;
  staking_period: TimestampRangeNullable;
  timestamp: TimestampRange;
};
