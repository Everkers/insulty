import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import LoginPage from "pages/Login"
import Register from "pages/Register"

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
  return (
    <React.Suspense fallback={<div>....loading</div>}>
      <Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route key={path} path={path} exact={exact}>
            <Component />
          </Route>
        ))}
        <Redirect to='/login' exact />
      </Switch>
    </React.Suspense>
  )
}

export default React.memo(UnauthenticatedApp)
