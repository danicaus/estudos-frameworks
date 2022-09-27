import { auth, signInWithPopup, provider } from '../../src/services/auth'

let user;

async function logarComGithub() {
  console.log(process.env.FIREBASE_API_KEY)

  signInWithPopup(auth, provider)
    .then(result => {
      if(result.user) {
        const { displayName, photoURL, uid } = user;

        if(!displayName || !photoURL) {
          throw new Error('Faltando informações da conta Google');
        }
        
        user = {
          id: uid,
          nome: displayName, 
          avatar: photoURL,
        }
      }
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      throw new Error(`Erro ${errorCode}. Mensagem: ${errorMessage}`)
    });
} 

export const loginService = {
  logarComGithub,
  user,
}
