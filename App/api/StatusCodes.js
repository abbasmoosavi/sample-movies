/**
 * Status codes
 */

const Success = {
  OK: 200, // Successfully request!
  CREATED: 201, // User did create!
  ACCEPTED: 202,
};

const Faild = {
  METHOD_NOT_ALLOWED: 405, // Already exist this email!
  UNPROCESSABLE_ENTITY: 422, // Internal server error!
  BAD_REQUEST: 400, // requierd params!
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  EXPIRED_TOKEN: 498,
  EMAIL_HAS_SENT: 406, // Activation email has sent!
  ENTITY_TO_LARGE: 413, // Entity Too Large in upload image!
  INTERNAL_SERVER_ERROR: 500, // Internal server error!
};

export const StatusCodes = {
  Success,
  Faild,
};
