import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

//flow: someone is making a request get user details --> authorize --> verify --> if token is valid --> next --> get user details
const authorize = async (req, res, next) => {
  try {
    // 1) extracts token from headers
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 2) Check if token exists
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, JWT_SECRET); //verify token

    const user = await User.findById(decoded.userId); // Find user in DB

    // 3) Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user; //Attach user to request

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default authorize;
