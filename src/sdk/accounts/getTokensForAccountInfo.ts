import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirrornode } from "$types";

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
   * The ID of the token to return information for
   */
  "token.id"?: string;
  [property: string]: unknown;
};

export async function getTokensForAccountInfo(
  idOrAliasOrEvmAddress: string,
  option: QueryOptions<Options>,
) {
  const opBuilder = new QueryOptionBuilder(option);

  const res = await fetchByOptionBuilder(
    `/api/v1/accounts/${idOrAliasOrEvmAddress}/tokens`,
    opBuilder,
  );

  return safeResponseOutput<mirrornode.Tokens>(res);
}
