import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from "components/Navbar"
import Home from "pages/Home"
import { FilterProvider } from "contexts/FilterCategories"
import FullPageLoading from "pages/FullPageLoading"
const routes = [
  {
    component: Home,
    path: "/home",
    exact: true,
  },
]
// route to redirect to incase we didn't find target route
const redirectRoute = routes[0].path
const AuthenticatedApp = () => {
  return (
    <>
      <Navbar />
      <FilterProvider>
        <React.Suspense fallback={<FullPageLoading />}>
          <Switch>
            {routes.map(({ path, exact, component: Component }) => (
              <Route key={path} path={path} exact={exact}>
                <Component />
              </Route>
            ))}
            <Redirect to={redirectRoute} exact />
          </Switch>
        </React.Suspense>
      </FilterProvider>
    </>
  )
}

export default React.memo(AuthenticatedApp)
