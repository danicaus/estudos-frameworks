import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../services/auth";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const { displayName, photoURL, uid } = user;

        if(!displayName || !photoURL) {
          throw new Error('Faltando informações da conta Google');
        }
      }

      setUser({
        id: uid,
        nome: displayName, 
        avatar: photoURL,
      })
    })

    return () => unsubscribe()
  }, [])

  async function logarComGithub() {
    signInWithPopup(auth, provider)
      .then(result => {
        if(result.user) {
          const { displayName, photoURL, uid } = user;

          if(!displayName || !photoURL) {
            throw new Error('Faltando informações da conta Google');
          }
          
          setUser({
            id: uid,
            nome: displayName, 
            avatar: photoURL,
          })
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        throw new Error(`Erro ${errorCode}. Mensagem: ${errorMessage}`)
      });
  } 

  return (
    <AuthContext.Provider value={{user, logarComGithub}}>
      {children}
    </AuthContext.Provider>
  )
} 
