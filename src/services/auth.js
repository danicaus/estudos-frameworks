import { getAuth, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export default {
  auth,
  provider,
  signInWithPopup,
};
