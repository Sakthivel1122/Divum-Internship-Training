import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
// import About from "./components/About";
import Products from "./components/Products";
import Features from "./components/Features";
import New from "./components/New";
import AllProducts from "./components/AllProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Profile from "./components/Profile";
import { AuthProvider } from "./Context/Auth";
import Login from "./components/Login";
const LazyAbout = lazy(() => import("./components/About"));
const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback="Loading...">
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="/products" element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path="features" element={<Features />} />
            <Route path="new" element={<New />} />
          </Route>

          
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
