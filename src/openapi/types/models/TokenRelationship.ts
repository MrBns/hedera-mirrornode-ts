/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityId } from "./EntityId";
import type { Timestamp } from "./Timestamp";
export type TokenRelationship = {
  /**
   * Specifies if the relationship is implicitly/explicitly associated.
   */
  automatic_association: boolean;
  /**
   * For FUNGIBLE_COMMON, the balance that the account holds in the smallest denomination. For NON_FUNGIBLE_UNIQUE, the number of NFTs held by the account.
   */
  balance: number;
  created_timestamp: Timestamp;
  decimals: number;
  /**
   * The Freeze status of the account.
   */
  freeze_status: "NOT_APPLICABLE" | "FROZEN" | "UNFROZEN";
  /**
   * The KYC status of the account.
   */
  kyc_status: "NOT_APPLICABLE" | "GRANTED" | "REVOKED";
  token_id: EntityId;
};
