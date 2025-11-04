import type { mirronode } from "$types";
import type { SdkResponse } from "$types/response";
import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";

type Option = {
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * The order in which items are listed
   */
  order?: mirronode.orderQueryParam;
  /**
   * The ID of the spender to return information for
   */
  "spender.id"?: string;
  [property: string]: unknown;
};

export async function getCryptoAllowancesForAccountInfo(
  idOrAliasOrEvmAddress: string,
  options: QueryOptions<Option>,
): SdkResponse<mirronode.CryptoAllowancesResponse> {
  const opBuilder = new QueryOptionBuilder(options);

  const res = await fetchByOptionBuilder(
    `/accounts/${idOrAliasOrEvmAddress}/crypto-allowances`,
    opBuilder,
  );
  return safeResponseOutput(res);
}
