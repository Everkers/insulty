import "styles/output.css"
import UnAthenticatedApp from "routes/unauthenticated-app"
import { useRootContext } from "contexts/root-provider"
import Notification from "components/Notification"
const App = () => {
  const { state, dispatch } = useRootContext()
  // testing cords from localstorage
  const cords = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  }
  const validCords =
    cords.username === "everkers" && cords.password === "123456"
  console.log(cords, validCords)
  return (
    <>
      <Notification
        close={() =>
          dispatch({
            type: "set_notification",
            payload: { ...state.notification, show: false },
          })
        }
        message={state.notification.message}
        isVisible={state.notification.show}
      />
      {validCords ? "loggedin" : <UnAthenticatedApp />}
    </>
  )
}

export default App
