/* eslint-disable linebreak-style */
/* eslint-disable constructor-super */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}

module.exports = ClientError;
