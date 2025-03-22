import { configByNetworks, type TNetworks } from "../networks";

export type UrlSearchParamsInit =
  | URLSearchParams
  | string
  | Record<string, boolean | number | string | readonly string[]>
  | Iterable<[string, string]>
  | ReadonlyArray<[string, string]>
  | undefined;

export type QueryOptions<Query = UrlSearchParamsInit, Paylod = unknown> = {
  query?: Query;
  network?: TNetworks;
  payload?: Paylod;
  requestOptions?: RequestInit;
};

export class QueryOptionBuilder<Payload = unknown> {
  #query?: URLSearchParams;
  network: TNetworks = "mainnet";
  #payload?: Payload;

  constructor(options: QueryOptions<UrlSearchParamsInit, Payload>) {
    // @ts-ignore
    this.#query = new URLSearchParams(options.query);
    this.network = options.network || "mainnet";
    this.#payload = this.#payload;
  }

  getQueryString() {
    if (this.#query && this.#query?.size > 0) {
      return this.#query.toString();
    }
    return "";
  }

  getPayload() {
    if (!this.#payload) {
      return "";
    } else if (typeof this.#payload === "string") {
      return this.#payload;
    } else if (
      typeof this.#payload === "number" ||
      typeof this.#payload === "bigint"
    ) {
      return this.#payload;
    } else if (typeof this.#payload === "function") {
      return "";
    } else {
      return JSON.stringify(this.#payload);
    }
  }

  apiBase() {
    return configByNetworks[this.network].mirrornode_base;
  }
}
