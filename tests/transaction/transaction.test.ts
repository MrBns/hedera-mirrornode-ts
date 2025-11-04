import { getAccountInfoByAddress } from "@sdk/accounts/getAccountByAddress";
import { listTransaction } from "@sdk/transactions/listTransactions";
import { test } from "vitest";

test.skip("transaction list api calls", async () => {
  await listTransaction({
    network: "previewnet",
    query: {
      limit: 1,
    },
  }).then((res) => console.log(res));
});

test("Get Account infor by address", async () => {
  await getAccountInfoByAddress("0.0.10075301").then((res) => {
    console.log(res);
  });
});
