import { CustomErrors } from "./custom-error";

export class NotFoundError extends CustomErrors {
  statusCode = 404;
  constructor() {
    super("Route not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeError(): { message: string; field?: string | undefined }[] {
    return [{ message: "Route not found" }];
  }
}
