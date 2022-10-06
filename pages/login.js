import { signIn } from "next-auth/react";

export default function Login() {
  // const { data: session } = getSession()

  return (
    <>
      <h1>Olá, pessoa!</h1>
      <button onClick={() => signIn()}>Login</button>
    </>  
  )
}