import type { mirronode } from "$types";
import { fetchByOptionBuilder, safeResponseOutput } from "@helper/fetcher";
import { QueryOptionBuilder, type QueryOptions } from "@helper/query_options";

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
   * The consensus timestamp as a Unix timestamp in seconds.nanoseconds format with an
   * optional comparison operator. See [unixtimestamp.com](https://www.unixtimestamp.com/) for
   * a simple way to convert a date to the 'seconds' part of the Unix time.
   */
  timestamp?: string[];
  [property: string]: unknown;
};

export async function getPastStackingRewardForAccount(
  idOrAliasOrEvmAddress: string,
  option: QueryOptions<Options>,
) {
  const opBuilder = new QueryOptionBuilder(option);

  const res = await fetchByOptionBuilder(
    `/api/v1/accounts/${idOrAliasOrEvmAddress}/rewards`,
    opBuilder,
  );

  return safeResponseOutput<mirronode.StakingRewardsResponse>(res);
}
