import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirronode } from "$types";

export interface Options {
  /**
   *
   * *The ID of the account to return information for
   * Match pattern: `^((gte?|lte?|eq|ne)\:)?(\d{1,10}\.\d{1,10}\.)?\d{1,10}$`
   */
  "account.id"?: string;
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * Partial or full token name. Not allowed to be used with token.id or account.id parameter.
   * Pagination is not supported with the use of this parameter and results are ordered by
   * token.id with respect to the order parameter.
   */
  name?: string;
  /**
   * The order in which items are listed
   */
  order?: mirronode.orderQueryParam;
  /**
   * The public key to compare against
   */
  publickey?: string;
  /**
   * The ID of the token to return information for
   */
  "token.id"?: string;
  type?: string[];
  [property: string]: unknown;
}

/**
 * Returns a list of tokens on the network. <br/>
 * url - **`/api/v1/tokens`**
 */
export async function listTokens(options?: QueryOptions<Options>) {
  const opBuilder = new QueryOptionBuilder();

  const res = await fetchByOptionBuilder("/api/v1/tokens", opBuilder);
  return safeResponseOutput<mirronode.TokensResponse>(res);
}

/**
 *  list tokens of Of Account by Id.
 */
export async function listTokensByAccountId(
  accountMatchPattern: string,
  options: QueryOptions<Omit<Options, "account.id">>,
) {
  const opBuilder = new QueryOptionBuilder({
    ...options,
    query: {
      ...options.query,
      "account.id": accountMatchPattern,
    },
  });

  const res = await fetchByOptionBuilder("/api/v1/tokens", opBuilder);
  return safeResponseOutput<mirronode.TokensResponse>(res);
}
