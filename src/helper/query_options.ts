import { type HederaNetworks, configByNetworks } from "../networks";

export type QueryOptions<Query = object, Paylod = unknown> = {
  query?: Query;
  network?: HederaNetworks;
  payload?: Paylod;
  requestOptions?: RequestInit;
};

export class QueryOptionBuilder<Query = object, Payload = unknown> {
  #query?: URLSearchParams;
  network: HederaNetworks = "mainnet";
  #payload?: Payload;
  requestOption: RequestInit;

  constructor(options?: QueryOptions<Query, Payload>) {
    // @ts-ignore
    this.#query = this.#makeQueryFromObject(options?.query || {});
    this.network = options?.network || "mainnet";
    this.#payload = this.#payload;
    this.requestOption = options?.requestOptions || {};
  }

  getQueryString() {
    if (this.#query && this.#query?.size > 0) {
      return this.#query.toString();
    }
    return "";
  }

  #makeQueryFromObject(obj: object): URLSearchParams {
    const urlParams = new URLSearchParams();

    function parse(_obj: object) {
      const queue = [_obj];
      while (queue.length > 0) {
        const currentObj = queue.shift();
        if (currentObj === undefined) continue;

        for (const [key, val] of Object.entries(currentObj)) {
          if (typeof val === "object" && val !== null && !Array.isArray(val)) {
            queue.push(val);
          } else {
            urlParams.append(key, String(val));
          }
        }
      }
    }

    // // initital call;
    // parse(obj);
    parse(obj);

    return urlParams;
  }

  getPayload() {
    const p = this.#payload;
    const t = typeof p;

    // if null or function return ""
    if (p == null || t === "function") return "";

    if (t === "string" || t === "number" || t === "bigint") return p;

    return JSON.stringify(p);
  }

  apiBase() {
    return configByNetworks[this.network].mirrornode_base;
  }
}
