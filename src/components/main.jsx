import { Copy, Share2, MoreHorizontal } from "lucide-react"

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-sm w-full max-w-lg">
        <h2 className="text-lg font-semibold">Bitly Links</h2>
        <div className="mt-4 border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-gray-700 font-medium">www.linkedin.com – untitled</p>
            <a href="#" className="text-blue-600 hover:underline">bit.ly/4byRb9M</a>
            <p className="text-gray-500 text-sm">
              https://www.linkedin.com/in/example-profile/
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg bg-gray-200"><Copy size={16} /></button>
            <button className="p-2 rounded-lg bg-gray-200"><Share2 size={16} /></button>
            <button className="p-2 rounded-lg bg-gray-200"><MoreHorizontal size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
