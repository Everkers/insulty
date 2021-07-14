import { useAuthContext } from "contexts/Authentication"
const useCurrentUser = () => {
  const { user } = useAuthContext()
  return user
}
export default useCurrentUser
