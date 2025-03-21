export { default } from "next-auth/middleware";

// TODO change to custom middleware without using next-auth
export const config = {
   // matcher: ["/edit/:path*"]
   matcher: ["/none/"]
};
