export type SdkResponse404Details = {
  _stauts: {
    messages: {
      data: string | null;
      detail: string | null;
      message: string;
    }[];
  };
};

export type SdkResponse403Details = {
  _stauts: {
    messages: {
      data: string | null;
      detail: string | null;
      message: string;
    }[];
  };
};

export type SdkReponseUnexpcted = {
  error: Error;
};

export type SdkResponse<T> = Promise<
  SdkResponse404Details | SdkResponse403Details | SdkReponseUnexpcted | T
>;
