export type TMirrorNodeResponse<T> =
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
    }
  | T;
