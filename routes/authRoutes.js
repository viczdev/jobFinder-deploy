import {
  register,
  login,
  updateUser,
  getGuestAccount,
} from "../controllers/authController.js";
import express from "express";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 30 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 30 minutes",
});

const authRouter = express.Router();
authRouter.route("/register").post(apiLimiter, register);
authRouter.route("/login").post(apiLimiter, login);
authRouter.route("/updateUser").patch(authenticateUser, updateUser);
authRouter.route("/guestAccount").get(getGuestAccount);
export default authRouter;
