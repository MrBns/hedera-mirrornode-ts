/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FixedCustomFee } from "./FixedCustomFee";
import type { Timestamp } from "./Timestamp";
/**
 * Custom fees assessed for each message submitted to the topic
 */
export type ConsensusCustomFees = {
  created_timestamp?: Timestamp;
  fixed_fees?: Array<FixedCustomFee>;
};
