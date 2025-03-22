import {
  QueryOptionBuilder,
  UrlSearchParamsInit,
  type QueryOptions,
} from "helper/query_options";
import type { TMirrorNodeBadResponse } from "types/BadRequest";
import type { TMirrorNodeResponseLinks } from "types/Links";
import type { TMirrorNodeResponse } from "types/Response";
import type {
  TMirrorNodeBalanceModificationType,
  TMirrorNodeTransaction,
  TMirrorNodeTransactionDetails,
  TMirrorNodeTransactionTypes,
} from "types/Transaction";

/* ==============================
 Get Transaction List
  ============================= */
export type TGetTransactionListQuery = {
  "account.id"?: string;
  limit?: number;
  order?: "asc" | "desc";
  result?: "success" | "failed";
  timestamp?: string[];
  transactiontype?: TMirrorNodeTransactionTypes;
  type?: TMirrorNodeBalanceModificationType;
};

/**
 * TransactionsResponse
 */
export type TGetTransactionsListResponse = {
  links?: TMirrorNodeResponseLinks;
  transactions?: TMirrorNodeTransaction[];
  [property: string]: unknown;
};

export async function getTransactionList(
  _options?: QueryOptions<TGetTransactionListQuery>,
) {
  const options = new QueryOptionBuilder(_options || {});

  return fetch(
    `${options.apiBase()}/api/v1/transactions?${options.getQueryString()}`,
  ).then(
    (response) => response.json() as Promise<TGetTransactionsListResponse>,
  );
}

/* ==============================
 Get Transaction By Id
  ============================= */

export type TGetTranactionByIdQuery = {
  nonce?: number;
  scheduled?: boolean;
};

export type TGetTransactionByIdRespone = TMirrorNodeResponse<{
  transactions: TMirrorNodeTransactionDetails[];
}>;

export async function getTransactionById(
  id: string,
  _options?: QueryOptions<TGetTranactionByIdQuery, unknown>,
) {
  const opt = new QueryOptionBuilder(_options || {});

  return fetch(`${opt.apiBase()}/api/v1/transactions/${id}`).then(
    (response) => response.json() as Promise<TGetTransactionByIdRespone>,
  );
}
