import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirrornode } from "$types";

type Option = {
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * The order in which items are listed
   */
  order?: mirrornode.orderQueryParam;
  /**
   * The ID of the spender to return information for
   */
  "spender.id"?: string;
  [property: string]: unknown;
};

export async function getCryptoAllowancesForAccountInfo(
  idOrAliasOrEvmAddress: string,
  options: QueryOptions<Option>,
) {
  const opBuilder = new QueryOptionBuilder(options);

  const res = await fetchByOptionBuilder(
    `/accounts/${idOrAliasOrEvmAddress}/crypto-allowances`,
    opBuilder,
  );
  return safeResponseOutput<mirrornode.CryptoAllowancesResponse>(res);
}
