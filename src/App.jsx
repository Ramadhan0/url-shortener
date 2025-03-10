import Main from "./components/main"
import Login from "./components/login"
import Navbar from "./components/navbar"
import Register from "./components/register"
import { useEffect, useState } from "react"
import { SideBar } from "./components/sidebar"
import { queryClient } from "./config/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


export default function App() {
  const [userData, setUserData] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  console.log(userData)

  useEffect(() => {
    const token = localStorage.getItem("refreshToken")
    setIsAuthenticated(!!token)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />} />
          <Route
            path="/"
            element={isAuthenticated ? (
              <div className="relative flex h-screen bg-gray-100">
                <SideBar className="z-50" />
                <main className="flex-1 p-6">
                  <Navbar className="z-40" userData={userData} />
                  <Main />
                </main>
              </div>
            ) : (
              <Navigate to="/login" replace />
            )}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}
