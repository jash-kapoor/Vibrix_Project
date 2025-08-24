import "dotenv/config";
export const ENV = {
    PORT: process.env.PORT || 5001,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    CLERK_PUBLISHABLE_KEY: process.ENV.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.ENV.CLERK_SECRET_KEY,
    SENTRY_DSN: process.ENV.SENTRY_DSN,
    INNGEST_EVENT_KEY = process.ENV.INGGEST_EVENT_KEY,
    INNGEST_SIGNIN_KEY = process.ENV.INGGEST_SIGNIN_KEY,
};