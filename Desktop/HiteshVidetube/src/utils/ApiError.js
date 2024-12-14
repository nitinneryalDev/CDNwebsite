// Define a custom error class by extending the built-in Error class
class ApiError extends Error {
  constructor(
    statusCode,       // The HTTP status code for the error (e.g., 404, 500)
    message = "Something went wrong", // The error message (default provided)
    errors = [],      // Optional additional details about the error (e.g., validation errors)
    stack = ""        // Optional stack trace for debugging (empty by default)
  ) {
    // Call the parent class (Error) constructor with the message
    super(message);

    // Assign the HTTP status code to the error
    this.statusCode = statusCode;

    // Initialize data as `null` since no data is returned with errors
    this.data = null;

    // Assign the error message (passed to `super` above, but also stored here for clarity)
    this.message = message;

    // Define a success property, which will always be `false` for errors
    this.success = false;

    // Assign any additional error details (useful for validation or API-specific error data)
    this.errors = errors;

    // Standard practice for error handling: capture the stack trace.
    // This helps in debugging by pinpointing where the error originated.
    if (stack) {
      // If a stack trace is provided, use it
      this.stack = stack;
    } else {
      // Otherwise, capture the current stack trace for this constructor
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class for use in other files
export { ApiError };
