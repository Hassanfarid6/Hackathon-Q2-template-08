// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher([
//     "/sign-in(.*)",
//     "/sign-up(.*)",
//     "/",
//   "/blog",
//   "/contact",
//   "/shop",
//   "/shop/(.*)",
//   "/checkout/(.*)",
//   "/cart",
//   "/api/(.*)",
// ]);
// // export default clerkMiddleware()

// export default clerkMiddleware(async (auth, request) => {
//   const url = new URL(request.url);

//   // Check if the route is public
//   if (!isPublicRoute(request)) {
//     await auth.protect();
//   }
// });

// export const config = {

// matcher: [
//   // Skip Next.js internals and all static files, unless found in search params
//   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//   // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }



import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};