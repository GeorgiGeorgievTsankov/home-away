import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/bookings(.*)",
  "/checkout(.*)",
  "/favorites(.*)",
  "/profile(.*)",
  "/rentals(.*)",
  "/reviews(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const { pathname } = req.nextUrl;

  if (isProtectedRoute(req) && !userId) {
    const signInPath = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/sign-in";
    const url = req.nextUrl.clone();
    url.pathname = signInPath;
    url.searchParams.set("redirect_url", req.nextUrl.href);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
