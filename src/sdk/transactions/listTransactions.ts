import type { mirronode } from "$types";
import type { SdkResponse } from "$types/response";
import { fetchByOptionBuilder, safeResponseOutput } from "../../helper/fetcher";
import {
  QueryOptionBuilder,
  type QueryOptions,
} from "../../helper/query_options";

type Options = {
  /**
   * The ID of the account to return information for
   */
  "account.id"?: string;
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * The order in which items are listed
   */
  order?: mirronode.orderQueryParam;
  /**
   * The transaction success type.
   */
  result?: "fail" | "success";
  /**
   * The consensus timestamp as a Unix timestamp in seconds.nanoseconds format with an
   * optional comparison operator. See [unixtimestamp.com](https://www.unixtimestamp.com/) for
   * a simple way to convert a date to the 'seconds' part of the Unix time.
   */
  timestamp?: string[];
  transactiontype?: mirronode.transactionTypeQueryParam;
  /**
   * The transaction account balance modification type.
   */
  type?: mirronode.BalanceModificationType;
  [property: string]: unknown;
};

export async function listTransaction(
  option?: QueryOptions<Options>,
): SdkResponse<mirronode.TransactionsResponse> {
  const opBuilder = new QueryOptionBuilder(option);
  const res = await fetchByOptionBuilder("/api/v1/transactions", opBuilder);
  return safeResponseOutput(res);
}
