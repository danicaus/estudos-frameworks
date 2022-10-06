import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      {session ?
        <>
          <h1>Olá, mundo!</h1>
          <h2>Aqui eu vou colocar os dados do github do usuário eeeeee</h2>
        </>
        : <>
          <p>Aqui na real tem um redirecionamento pra página de login, então teoricamente isso aqui não vai ser visto no próximo commit</p>
        </>
      }
    </>
  )
}