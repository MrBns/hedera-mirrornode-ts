import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirrornode } from "$types";
import { MirrorNodeReponse } from "$types/response";

type Options = {
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
  /**
   * If provided and set to false transactions will not be included in the response
   */
  transactions?: boolean;
  transactiontype?: mirrornode.TransactionTypes;
  [property: string]: unknown;
};

export async function getAccountInfoByAddress(
  idOrAddress: string,
  options?: QueryOptions<Options>,
) {
  const opBuilder = new QueryOptionBuilder(options);

  const res = await fetchByOptionBuilder(
    `/api/v1/accounts/${idOrAddress}`,
    opBuilder,
  );

  return safeResponseOutput<mirrornode.AccountBalanceTransactions>(res);
}
