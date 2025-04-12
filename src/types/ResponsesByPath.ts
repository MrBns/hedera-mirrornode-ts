import type { TMirrorNodeResponseLinks } from "./Links";
import type { TMirrorNodeNFT } from "./Nft";
import type { TMirrorNodeResponse } from "./Response";

export type TMirrorNodeResponseMap = {
  "list-nfts": TMirrorNodeResponse<{
    links?: TMirrorNodeResponseLinks;
    nfts: TMirrorNodeNFT[];
    [property: string]: unknown;
  }>;
};
