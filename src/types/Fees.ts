/**
 * AssessedCustomFee
 */
export interface TMirrorNodeAssessedCustomFee {
  amount?: number;
  collector_account_id?: null | string;
  effective_payer_account_ids?: Array<null | string>;
  token_id?: null | string;
  [property: string]: unknown;
}
