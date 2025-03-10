import axios from "axios"


const apiClient = axios.create({
  baseURL: "http://localhost:5551/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem("refreshToken")
        const response = await axios.post("/auth/refresh", { refreshToken })

        const newAccessToken = response.data.accessToken
        localStorage.setItem("accessToken", newAccessToken)

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
        return apiClient(originalRequest)
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError)

        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        window.location.href = "/auth/login"
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
