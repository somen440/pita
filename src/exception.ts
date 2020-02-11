export class RuntimeException extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "RuntimeException";
  }
}

export class LogicException extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "LogicException";
  }
}
