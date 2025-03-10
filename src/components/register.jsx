import { useState } from "react"
import PropTypes from "prop-types"
import apiClient from "../config/apiClient"
import { Link, useNavigate } from "react-router-dom"


export default function Register({ setIsAuthenticated, setUserData }) {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [usernameError, setUsernameError] = useState("")
	const navigate = useNavigate()

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const passwordRegex = /^(?=.*\d).{6,}$/

	const usernameRegex = /^[a-zA-Z0-9_]+$/

	const handleRegister = async () => {
		if (!username) {
			setUsernameError("Username is required")
			return
		}
		if (!usernameRegex.test(username)) {
			setUsernameError("Username can only contain letters, numbers, and underscores")
			return
		}
		setUsernameError("")

		if (!email) {
			setEmailError("Email is required")
			return
		}
		if (!emailRegex.test(email)) {
			setEmailError("Please enter a valid email address")
			return
		}
		setEmailError("")

		if (!password) {
			setPasswordError("Password is required")
			return
		}
		if (!passwordRegex.test(password)) {
			setPasswordError("Password must be at least 6 characters long and contain at least one number")
			return
		}
		setPasswordError("")

		try {
			const response = await (await apiClient.post("/auth/register", { username, email, password })).data

			localStorage.setItem("accessToken", response.data.accessToken)
			localStorage.setItem("refreshToken", response.data.refreshToken)

			setUserData(response.data.user)
			setIsAuthenticated(true)

			navigate("/")
		} catch (error) {
			console.error("Registration failed", error)
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">


				<h2 className="text-2xl font-semibold mb-4 text-center">
					Welcome to URL Shortener! <p className="text-sm py-2">Create an Account</p>
				</h2>

				<div className="mb-4">
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="w-full p-3 border rounded mb-2"
					/>
					{usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
				</div>

				<div className="mb-4">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 border rounded mb-2"
					/>
					{emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
				</div>

				<div className="mb-6">
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-3 border rounded mb-2"
					/>
					{passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
				</div>

				<button
					onClick={handleRegister}
					className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4 hover:bg-blue-700 transition duration-200"
				>
					Register
				</button>

				<p className="text-center text-sm text-gray-600">
					Already have an account?{" "}
					<Link to="/login" className="text-blue-600 hover:text-blue-700">
						Login here
					</Link>
				</p>
			</div>
		</div>
	)
}

Register.propTypes = {
	setIsAuthenticated: PropTypes.func.isRequired,
	setUserData: PropTypes.func.isRequired,
}
