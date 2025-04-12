export type TMirrorNodeResponse<T> =
  | T
  | {
      _status: {
        messages?: {
          /**
           * Error message in hexadecimal
           */
          data?: null | string;
          /**
           * Detailed error message
           */
          detail?: null | string;
          /**
           * Error message
           */
          message?: string;
        }[];
      };
    };
