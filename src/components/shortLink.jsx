import { useEffect, useState } from "react"
import apiClient from "../config/apiClient"
import { useParams } from "react-router-dom"



export default function ShortLinkPage() {
  const { shortcode } = useParams()
  const [loading, setLoading] = useState(true)
  const [errorCode, setErrorCode] = useState(null)

  useEffect(() => {
    if (!shortcode) return

    const fetchLink = async () => {
      setLoading(true)
      try {
        const response = await (await apiClient.get(`/urls/single/${shortcode}`)).data

        console.log(response)
        if (response.status === 200 && response.data?.url) {
          window.location.href = response.data.url
        }
      } catch (err) {
        setErrorCode(err.response?.status || 500)
      } finally {
        setLoading(false)
      }
    }

    fetchLink()
  }, [shortcode])

  if (!shortcode) {
    return <p>Waiting for shortcode...</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (errorCode === 404) {
    return (
      <div className="not-found">
        <h2>404 - Not Found</h2>
        <p>The shortcode you provided does not exist.</p>
      </div>
    )
  }

  if (errorCode === 429) {
    return (
      <div className="too-many-requests">
        <h2>Too Many Requests</h2>
        <p>You have exceeded the rate limit. Please try again later.</p>
      </div>
    )
  }

  return null
}
