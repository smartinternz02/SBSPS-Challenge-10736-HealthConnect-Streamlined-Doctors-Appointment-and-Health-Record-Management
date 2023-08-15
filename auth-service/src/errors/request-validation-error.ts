import { CustomErrors } from "./custom-error";
import { ValidationError } from "express-validator";
export class RequestValidationErrors extends CustomErrors {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Invalid request parameter");
    Object.setPrototypeOf(this, RequestValidationErrors.prototype);
  }
  serializeError(): { message: string; fields?: string | undefined }[] {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.type };
    });
  }
}
