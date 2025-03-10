import Main from "./components/main";
import Login from "./components/login";
import Navbar from "./components/navbar";
import apiClient from "./config/apiClient";
import Register from "./components/register";
import { useEffect, useState } from "react";
import { SideBar } from "./components/sidebar";
import { queryClient } from "./config/queryClient";
import ShortLinkPage from "./components/shortLink";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



export default function App() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      console.log(token);
      if (token) {
        try {
          const response = (await apiClient.get("/user")).data;

          console.log(response.data);
          setUserData(response.data);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Failed to fetch user data", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    fetchUserData();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/:shortcode" element={<ShortLinkPage />} />
          <Route
            path="/auth/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />
              )
            }
          />
          <Route
            path="auth/register"
            element={<Register setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />}
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div className="relative flex h-screen bg-gray-100">
                  <SideBar className="z-50" />
                  <main className="flex-1 p-6">
                    <Navbar className="z-40" userData={userData} />
                    <Main />
                  </main>
                </div>
              ) : (
                <Navigate to="auth/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
