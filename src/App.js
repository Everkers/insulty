import "styles/output.css"
import UnAthenticatedApp from "routes/unauthenticated-app"
import AthenticatedApp from "routes/authenticated-app"
import React from "react"
import { useRootContext } from "contexts/root-provider"
import InsultModal from "components/InsultModal"
import Notification from "components/Notification"
import useDarkTheme from "hooks/useDarkTheme"
const App = () => {
  useDarkTheme()
  const { state, dispatch } = useRootContext()
  // testing cords from localstorage
  const cords = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  }
  const validCords =
    cords.username === "everkers" && cords.password === "123456"
  React.useEffect(() => {
    dispatch({
      type: "set_authenticated",
      payload: validCords,
    })
  }, [validCords, dispatch])
  return (
    <div class='bg-white dark:bg-gray-900 min-h-screen'>
      <InsultModal />
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
      {validCords ? <AthenticatedApp /> : <UnAthenticatedApp />}
    </div>
  )
}

export default App
