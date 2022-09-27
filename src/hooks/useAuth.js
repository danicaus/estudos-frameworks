import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function useAuth() {
  const auth = useContext(AuthContext)

  return auth
}