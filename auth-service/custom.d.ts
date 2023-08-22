interface UserPayload {
  email: string;
  username: string;
  phoneNumber: string;
  address: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
    interface Response {
      currentUser?: UserPayload;
    }
  }
}
