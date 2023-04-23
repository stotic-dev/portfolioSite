
export interface EmailType {
    receiver: {
      name: string;
      email: string;
    };
    sender?: {
      name: string;
      email: string;
    };
  }