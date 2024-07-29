import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./nav.data.ts";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={route.isAuthRequired ?
              <ProtectedRoute userRole={route.userRole} element={<route.element/>}/> :
              <route.element/>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}