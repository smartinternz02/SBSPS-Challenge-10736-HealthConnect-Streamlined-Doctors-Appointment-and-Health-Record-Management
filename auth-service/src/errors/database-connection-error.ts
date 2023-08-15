import { CustomErrors } from "./custom-error";
import { ValidationError } from "express-validator";
export class DatabaseConnectionError extends CustomErrors {
  statusCode = 500;
  constructor(public errors: ValidationError[]) {
    super("Error connecting to databse");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeError(): { message: string; fields?: string | undefined }[] {
    return this.errors.map((err) => {
      return { message: err.msg, fields: err.type };
    });
  }
}
