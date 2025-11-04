import { test } from "vitest";
import { QueryOptionBuilder } from "../src/helper/query_options";

test("check if query params works", () => {
  const builder = new QueryOptionBuilder({
    query: {
      name: "nazmul",
      whoIsSabina: {
        wifeOf: "nazmul",
      },
    },
  });

  console.log(builder.getQueryString());
});
