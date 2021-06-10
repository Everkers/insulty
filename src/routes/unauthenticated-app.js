import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import LoginPage from "pages/Login"
const routes = [
  {
    component: LoginPage,
    path: "/login",
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
