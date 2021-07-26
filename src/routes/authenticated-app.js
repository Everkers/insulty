import React from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import Navbar from "components/Navbar"
import Home from "pages/Home"
import View from "pages/View"
import InsultModal from "components/InsultModal"
import { FilterProvider } from "contexts/FilterCategories"
import FullPageLoading from "pages/FullPageLoading"
import { AnimatePresence } from "framer-motion"
const routes = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: View,
    path: "/insult/:id",
    exact: true,
  },
]
// route to redirect to incase we didn't find target route
const redirectRoute = routes[0].path
const AuthenticatedApp = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <FilterProvider>
        <React.Suspense fallback={<FullPageLoading />}>
          <InsultModal />
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              {routes.map(({ path, exact, component: Component }) => (
                <Route key={path} path={path} exact={exact}>
                  <Component />
                </Route>
              ))}
              <Redirect to={redirectRoute} exact />
            </Switch>
          </AnimatePresence>
        </React.Suspense>
      </FilterProvider>
    </>
  )
}

export default React.memo(AuthenticatedApp)
