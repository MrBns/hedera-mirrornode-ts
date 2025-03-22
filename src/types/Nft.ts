/**
 * Nft
 */
export interface TMirrorNodeNFT {
  account_id: string;
  created_timestamp: string;
  delegating_spender?: null | string;
  /**
   * whether the nft or the token it belongs to has been deleted
   */
  deleted: boolean;
  /**
   * Arbitrary binary data associated with this NFT encoded in base64.
   */
  metadata?: string;
  modified_timestamp?: null | string;
  serial_number: number;
  spender?: string;
  token_id: string;
  [property: string]: unknown;
}
