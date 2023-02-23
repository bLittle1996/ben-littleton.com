import { createCookieSessionStorage } from "@remix-run/node";

const isProd = process.env.NODE_ENV === "production";

if (!process.env.SESSION_SECRET && isProd) {
  throw new Error("SESSION_SECRET must be set in .env");
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "session",
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: isProd,
      secrets: process.env.SESSION_SECRET
        ? [process.env.SESSION_SECRET]
        : undefined,
    },
  });

function getSessionImpl(request: Request) {
  return getSession(request.headers.get("Cookie"));
}

export { getSessionImpl as getSession, commitSession, destroySession };
