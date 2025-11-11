import type { mirronode } from "$types";
import { MirrorNodeReponse } from "$types/response";

import type { QueryOptionBuilder } from "./query_options";

export function fetchByOptionBuilder<T>(
  path: string,
  options: QueryOptionBuilder<T>,
) {
  const queryString = options.getQueryString();

  const url = options.apiBase() + path + (queryString ? `?${queryString}` : "");
  return fetch(url, options.requestOption);
}

export async function safeResponseOutput<T extends object>(res: Response) {
  if (res.ok) {
    return new MirrorNodeReponse<T>((await res.json()) as T, "ok");
  } else {
    return new MirrorNodeReponse<mirronode.Error>(
      (await res.json()) as mirronode.Error,
      "bad",
    );
  }
}
