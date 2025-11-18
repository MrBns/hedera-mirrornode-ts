import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder } from "@helper/query_options";
import type { mirrornode } from "$types";

type Options = {
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
   * Whether to include balance information or not. If included, token balances are limited to
   * at most 50 per account as outlined in HIP-367. If multiple values are provided the last
   * value will be the only value used.
   */
  balance?: boolean;
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * The order in which items are listed
   */
  order?: mirrornode.orderQueryParam;
  [property: string]: unknown;
};

export function listAccountOnNetwork(option: QueryOptionBuilder<Options>) {
  const opBuilder = new QueryOptionBuilder(option);

  return fetchByOptionBuilder("/api/v1/accounts", opBuilder).then((res) =>
    safeResponseOutput<mirrornode.AccountsResponse>(res),
  );
}
