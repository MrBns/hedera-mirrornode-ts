import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirronode } from "$types";

type Options = {
  /**
   * The maximum number of items to return
   */
  limit?: number;
  /**
   * The order in which items are listed
   */
  order?: mirronode.orderQueryParam;
  /**
   * The nft serial number (64 bit type). Requires a tokenId value also be populated.
   */
  serialnumber?: string;
  /**
   * The ID of the spender to return information for
   */
  "spender.id"?: string;
  /**
   * The ID of the token to return information for
   */
  "token.id"?: string;
  [property: string]: unknown;
};

export async function getNftsForAccountInfo(
  address: string,
  option: QueryOptions<Options>,
) {
  const opBuilder = new QueryOptionBuilder(option);

  const res = await fetchByOptionBuilder(
    `/api/v1/accounts/${address}/nfts`,
    opBuilder,
  );

  return safeResponseOutput<mirronode.Nfts>(res);
}
