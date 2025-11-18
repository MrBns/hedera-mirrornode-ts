import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";
import type { mirrornode } from "$types";

export interface Options {
  /**
   * The Unix timestamp in seconds.nanoseconds format. See
   * [unixtimestamp.com](https://www.unixtimestamp.com/) for a simple way to convert a date to
   * the 'seconds' part of the Unix time.
   */
  timestamp?: string;
  [property: string]: unknown;
}

export async function getTokenInfoById(
  tokenId?: string,
  options?: QueryOptions<Options>,
) {
  const opBuilder = new QueryOptionBuilder(options);

  const res = await fetchByOptionBuilder(
    `/api/v1/tokens/${tokenId}`,
    opBuilder,
  );

  return safeResponseOutput<mirrornode.TokenInfo>(res);
}
