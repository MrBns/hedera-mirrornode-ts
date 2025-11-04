/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityId } from "./EntityId";
import type { EvmAddressNullable } from "./EvmAddressNullable";
import type { Timestamp } from "./Timestamp";
export type ContractAction = {
  /**
   * The nesting depth of the call
   */
  call_depth?: number;
  /**
   * The type of the call operation
   */
  call_operation_type?:
    | "CALL"
    | "CALLCODE"
    | "CREATE"
    | "CREATE2"
    | "DELEGATECALL"
    | "STATICCALL"
    | "UNKNOWN";
  /**
   * The type of the call
   */
  call_type?: "NO_ACTION" | "CALL" | "CREATE" | "PRECOMPILE" | "SYSTEM";
  caller?: EntityId;
  /**
   * The entity type of the caller
   */
  caller_type?: "ACCOUNT" | "CONTRACT";
  /**
   * The EVM address of the caller
   */
  from?: string;
  /**
   * Gas cost in tinybars
   */
  gas?: number;
  /**
   * Gas used in tinybars
   */
  gas_used?: number;
  /**
   * The position of the action within the ordered list of actions
   */
  index?: number;
  /**
   * The hex encoded input data
   */
  input?: string | null;
  recipient?: EntityId;
  /**
   * The entity type of the recipient
   */
  recipient_type?: "ACCOUNT" | "CONTRACT" | null;
  /**
   * The hex encoded result data
   */
  result_data?: string | null;
  /**
   * The type of the result data
   */
  result_data_type?: "OUTPUT" | "REVERT_REASON" | "ERROR";
  timestamp?: Timestamp;
  to?: EvmAddressNullable;
  /**
   * The value of the transaction in tinybars
   */
  value?: number;
};
