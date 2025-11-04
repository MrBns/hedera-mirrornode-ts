/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Timestamp } from "./Timestamp";
export type ScheduleSignature = {
  consensus_timestamp?: Timestamp;
  public_key_prefix?: string;
  signature?: string;
  type?:
    | "CONTRACT"
    | "ED25519"
    | "RSA_3072"
    | "ECDSA_384"
    | "ECDSA_SECP256K1"
    | "UNKNOWN";
};
