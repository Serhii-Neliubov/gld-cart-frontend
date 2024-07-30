import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./nav.data.ts";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import Layout from "@/components/layouts/DefaultLayout.tsx";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={route.isAuthRequired
              ? <ProtectedRoute userRole={route.userRole} element={<Layout><route.element/></Layout>} />
              : <Layout><route.element/></Layout>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}