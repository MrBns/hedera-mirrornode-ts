export const networks = {
  testnet: "testnet",
  mainnet: "mainnet",
  previewnet: "previewnet",
};

export const configByNetworks = {
  mainnet: {
    mirrornode_base: "https://mainnet.mirrornode.hedera.com",
  },

  testnet: {
    mirrornode_base: "https://testnet.mirrornode.hedera.com",
  },

  previewnet: {
    mirrornode_base: "https://previewnet.mirrornode.hedera.com",
  },
} as const;

export type HederaNetworks = keyof typeof networks;
