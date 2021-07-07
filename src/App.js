import { AUTH_STATUS, useAuthContext } from "contexts/Authentication"
import UnAthenticatedApp from "routes/unauthenticated-app"
import AthenticatedApp from "routes/authenticated-app"
import React from "react"
import { useRootContext } from "contexts/root-provider"
import Notification from "components/Notification"
import useDarkTheme from "hooks/useDarkTheme"
import FullPageLoading from "pages/FullPageLoading"
const App = () => {
  useDarkTheme()
  const { authenticated, status: authStatus } = useAuthContext()
  const { state, dispatch } = useRootContext()
  if (authStatus === AUTH_STATUS.IDLE || authStatus === AUTH_STATUS.PENDING) {
    return <FullPageLoading />
  }
  return (
    <div class='bg-white overflow-hidden dark:bg-gray-900 min-h-screen'>
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
      {authenticated ? <AthenticatedApp /> : <UnAthenticatedApp />}
    </div>
  )
}

export default App
