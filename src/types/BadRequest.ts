/**
 * Error
 */
export type TMirrorNodeBadResponse = {
  _status?: TMirrorNodeResponesStatus;
};

export type TMirrorNodeResponesStatus = {
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
