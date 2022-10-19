import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useRef } from "react";
import { AuthContextProvider } from "./utils/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// components import using codeslitting to optimize the react app
const Home = lazy(() => import("./pages/Home"));
const MobileNav = lazy(() => import("./components/MobileNav"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Account = lazy(() => import("./pages/Account"));

function App() {
  return (
    <AuthContextProvider>
      <Suspense fallback={<div>loading......</div>}>
        <MobileNav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/account"
            element={(
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            )}
          />
        </Routes>
      </Suspense>
    </AuthContextProvider>
  );
}

export default App;
