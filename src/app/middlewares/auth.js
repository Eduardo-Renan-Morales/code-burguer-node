import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.js";

export default (request, response, next) => {
  const autoToken = request.headers.authorization;

  if (!autoToken) {
    return response.status(401).json({ error: " Token not provided" });
  }

  const token = autoToken.split(" ")[1];

  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new error();
      }
      1;
      request.userId = decoded.id;
      request.userName = decoded.name;

      return next();
    });
  } catch (err) {
    return response.status(401).json({ error: " Token is invalid" });
  }
};
