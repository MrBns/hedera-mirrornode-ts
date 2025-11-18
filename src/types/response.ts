import type { mirrornode } from "$types";

export class MirrorNodeReponse<T> {
  data?: T | mirrornode.Error;
  tag: "" | "ok" | "bad";
  constructor(data: T, tag: typeof this.tag = "") {
    this.data = data;
    this.tag = tag;
  }

  isOk(): this is MirrorNodeReponse<T> {
    return this.tag === "ok";
  }
  isBad(): this is MirrorNodeReponse<mirrornode.Error> {
    return this.tag === "bad";
  }
}

// export class MirrorNodeBadResponse extends MirrorNodeReponse<null> {
//   error: mirronode.Error;

//   constructor(err: mirronode.Error) {
//     super(null, "bad");
//     this.error = err;
//   }
// }
// export class MirrorNodeUnknownResponse extends MirrorNodeReponse<null> {
//   error: unknown;

//   constructor(err: unknown) {
//     super(null, "unknown");
//     this.error = err;
//   }
// }

// export class MirrorNodeUnExpectedResponse extends MirrorNodeReponse<null> {
//   error: Error;

//   constructor(error: Error) {
//     super(null, "unexpected");
//     this.error = error;
//   }
// }

// export class MirrorNodeOkResponse<T> extends MirrorNodeReponse<T> {
//   data: T;

//   constructor(data: T) {
//     super(data, "ok");
//     this.data = data;
//   }
// }

// export type MirrorNodeResponsesPromiseType<T> =
//   | MirrorNodeBadResponse
//   | MirrorNodeUnExpectedResponse
//   | MirrorNodeOkResponse<T>
//   | MirrorNodeUnknownResponse;

// export type MirrorNodeBadResponseTypePromise<T> = Promise<
//   MirrorNodeResponsesType<T>
// >;
