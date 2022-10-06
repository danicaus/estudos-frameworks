import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    name: string,
    bio: string
    avatar_url: string,
    login: string, 
  }
}