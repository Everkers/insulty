import React from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import LoginPage from "pages/Login"
import Register from "pages/Register"
import { AnimatePresence } from "framer-motion"
const routes = [
  {
    component: LoginPage,
    path: "/login",
    exact: true,
  },
  {
    component: Register,
    path: "/register",
    exact: true,
  },
]

const UnauthenticatedApp = () => {
  const location = useLocation()
  return (
    <React.Suspense fallback={<div>....loading</div>}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact}>
              <Component />
            </Route>
          ))}
          <Redirect to='/login' exact />
        </Switch>
      </AnimatePresence>
    </React.Suspense>
  )
}

export default React.memo(UnauthenticatedApp)
