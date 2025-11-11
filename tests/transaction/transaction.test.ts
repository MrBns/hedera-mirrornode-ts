import { listTransaction } from "@sdk";
import { test } from "vitest";

test("Get Transaction by Transaction Id", async () => {
  await listTransaction()
    .then((res) => {
      if (res.isOk()) {
      }
    })
    .catch((e) => console.error(e));
});
