interface SdkClientInterface {
  mirrornode_baseurl: string;
}

export const testnetClient: SdkClientInterface = {
  mirrornode_baseurl: "https://testnet.mirrornode.hedera.com",
};
export const mainnet: SdkClientInterface = {
  mirrornode_baseurl: "https://testnet.mirrornode.hedera.com",
};
