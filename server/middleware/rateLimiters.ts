import { rateLimit } from "express-rate-limit";

const admin_login_limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "limit exceed: try again after an hour",
});

const user_login_limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "limit exceed: try again after an hour",
});

const universal_limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "limit exceed: try again after an hour",
});

export { universal_limiter, user_login_limiter, admin_login_limiter };
