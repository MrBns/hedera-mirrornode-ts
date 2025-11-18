import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirrornode } from "$types";

export interface Options {
  /**
   * The optional balance value to compare against
   */
  "account.balance"?: string;
  /**
   * The ID of the account to return information for
   */
  "account.id"?: string;
  /**
   * The account's public key to compare against
   */
  "account.publickey"?: string;
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * The order in which items are listed
   */
  order?: mirrornode.orderQueryParam;
  /**
   * The consensus timestamp as a Unix timestamp in seconds.nanoseconds format with an
   * optional comparison operator. See [unixtimestamp.com](https://www.unixtimestamp.com/) for
   * a simple way to convert a date to the 'seconds' part of the Unix time.
   */
  timestamp?: string[];
  [property: string]: unknown;
}

/**
 * Returns a list of token balances given the id. This represents the Token supply distribution across the network
 * @param id
 * @param options
 */
export async function listTokenBalancesById(
  tokenId: string,
  options?: QueryOptions<Options>,
) {
  const opBuilder = new QueryOptionBuilder(options);

  const res = await fetchByOptionBuilder(
    `/api/v1/tokens/${tokenId}/balances`,
    opBuilder,
  );

  return safeResponseOutput<mirrornode.TokenBalancesResponse>(res);
}
