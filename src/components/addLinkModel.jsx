import { useState } from "react"
import apiClient from "../config/apiClient"
import PropTypes from "prop-types"

export default function AddLinkModal({ closeModal }) {
  const [originalUrl, setOriginalUrl] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    if (!urlRegex.test(originalUrl)) {
      setError("Please enter a valid URL")
      return
    }
    try {
      await apiClient.post("/urls/shorten", { url: originalUrl })
      closeModal()
    } catch (error) {
      console.log(error)
      setError("Failed to create link")
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Create a New Link</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Enter URL"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-end">
            <button type="button" onClick={closeModal} className="mr-4 text-gray-600">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

AddLinkModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
}
