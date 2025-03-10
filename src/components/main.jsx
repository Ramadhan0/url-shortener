import { useEffect, useState } from "react"
import apiClient from "../config/apiClient"
import { Copy, Delete, EditIcon } from "lucide-react"
import AddLinkModal from "./addLinkModel"

export default function Main() {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(null)
  const serverIp = "localhost"

  const fetchLinks = async () => {
    try {
      const response = await (await apiClient.get("/urls")).data
      setLinks(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error("Failed to fetch links", error)
    }
  }

  const handleAddLink = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    fetchLinks()
  }

  const copyToClipboard = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(shortUrl)

    setTimeout(() => {
      setCopied(null)
    }, 2000)
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center w-full">
        <div className="w-2/3 flex justify-end ml-60">
          <button
            onClick={handleAddLink}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-32 font-semibold"
          >
            Create New
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="bg-white p-4 rounded-lg shadow-sm w-2/3 mt-6 ml-60">
          {loading ? (
            <div className="text-center">
              <p className="text-gray-500 text-xl font-medium">Loading...</p>
            </div>
          ) : (
            <>
              {links.length > 0 && (
                <h2 className="text-lg font-semibold">Link Shortener Links</h2>
              )}
              {links.length > 0 ? (
                links.map((link) => (
                  <div
                    key={link.id}
                    className="mt-4 border rounded-lg p-4 flex items-center"
                  >
                    <div className="w-2/3">
                      <a
                        href={`http://${serverIp}:5173/${link.short_code}`}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        {`http://${serverIp}:5173/${link.short_code}`}
                      </a>
                      <p className="text-gray-500 text-sm">{link.long_url}</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className={`p-2 rounded-lg flex mx-2 px-4 ${
                          copied === `http://${serverIp}:5173/${link.short_code}`
                            ? "bg-green-200"
                            : "bg-gray-200"
                        }`}
                        onClick={() =>
                          copyToClipboard(
                            `http://${serverIp}:5173/${link.short_code}`
                          )
                        }
                      >
                        <Copy size={16} className="mt-1 mx-1" />
                        <p>{copied === `http://${serverIp}:5173/${link.short_code}` ? "Copied!" : "Copy"}</p>
                      </button>
                      <button className="p-2 rounded-lg bg-blue-100 flex mx-2 px-4">
                        <EditIcon size={16} className="mt-1 mx-1" />
                        <p>Disable</p>
                      </button>
                      <button className="p-2 rounded-lg bg-red-600 flex mx-2 px-4">
                        <Delete size={16} className="mt-1 mx-1" />
                        <p>Delete</p>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="mt-6 text-center">
                  <p className="text-gray-500 text-xl font-medium">
                    You have not created your first link yet!
                  </p>
                  <p className="text-gray-400 mt-2">
                    Start by creating a new link and watch it grow!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {showModal && <AddLinkModal closeModal={closeModal} />}
    </div>
  )
}
