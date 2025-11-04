import type { SdkReponseUnexpcted } from "$types/response";
import type { QueryOptionBuilder } from "./query_options";

export function fetchByOptionBuilder<T>(
  path: string,
  options: QueryOptionBuilder<T>,
) {
  const queryString = options.getQueryString();

  const url = options.apiBase() + path + (queryString ? `?${queryString}` : "");
  return fetch(url, options.requestOption);
}

export async function safeResponseOutput<T>(res: Response) {
  if (res.ok) {
    return res.json() as Promise<T>;
  } else {
    return {
      error: Error(res.statusText || `server replied with ${res.status}`),
    } as SdkReponseUnexpcted;
  }
}
