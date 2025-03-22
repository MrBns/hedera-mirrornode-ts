import { expect, test, assert } from "vitest";
import { getTransactionById } from "../src/index";

test.skip("demo checking of function", async () => {
  await getTransactionById("0.0.4940219-1742238506-883830236", {
    network: "testnet",
  }).then((v) => {
    if ("_status" in v) {
      assert(false, "transaction failed");
    } else {
      assert(
        v.transactions[0].result === "SUCCESS",
        "transaction should be success",
      );
    }
  });
  expect(true).toBe(true);
});
