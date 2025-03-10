// import PropTypes from "prop-types"
import { Copy, Delete, EditIcon } from "lucide-react"

export default function Main() {
  return (
    <div className="min-h-screen max-h-screen  bg-gray-100">
      <div className="flex justify-center w-lvw">
        <div className="w-2/3 h-fit flex justify-end  ml-60">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-32 font-semibold">Create New</button>
        </div>
      </div>
      <div className="flex justify-center w-lvw">
        <div className="bg-white p-4 rounded-lg shadow-sm w-2/3 h-fit mt-6 ml-60">
          <h2 className="text-lg font-semibold">Link Shortener Links</h2>
          <div className="mt-4 border rounded-lg p-4 flex items-center">
            <div className="w-2/3">
              <a href="#" className="text-blue-600 hover:underline">bit.ly/4byRb9M</a>
              <p className="text-gray-500 text-sm">
                https://www.linkedin.com/in/example-profile/
              </p>
            </div>
            <div className="flex justify-end">
              <button className="p-2 rounded-lg bg-gray-200 flex mx-2 px-4"><Copy size={16} className="mt-1 mx-1" /><p>Copy</p></button>
              <button className="p-2 rounded-lg bg-red-100 flex mx-2 px-4"><EditIcon size={16} className="mt-1 mx-1" /><p>Disable</p></button>
              <button className="p-2 rounded-lg bg-red-600 flex mx-2 px-4"><Delete size={16} className="mt-1 mx-1" /><p>Delete</p></button>
            </div>
          </div>
          <div className="mt-4 border rounded-lg p-4 flex items-center">
            <div className="w-2/3">
              <a href="#" className="text-blue-600 hover:underline">bit.ly/4byRb9M</a>
              <p className="text-gray-500 text-sm">
                https://www.linkedin.com/in/example-profile/
              </p>
            </div>
            <div className="flex justify-end">
              <button className="p-2 rounded-lg bg-gray-200 flex mx-2 px-4"><Copy size={16} className="mt-1 mx-1" /><p>Copy</p></button>
              <button className="p-2 rounded-lg bg-red-100 flex mx-2 px-4"><EditIcon size={16} className="mt-1 mx-1" /><p>Disable</p></button>
              <button className="p-2 rounded-lg bg-red-600 flex mx-2 px-4"><Delete size={16} className="mt-1 mx-1" /><p>Delete</p></button>
            </div>
          </div>
          <div className="mt-4 border rounded-lg p-4 flex items-center">
            <div className="w-2/3">
              <a href="#" className="text-blue-600 hover:underline">bit.ly/4byRb9M</a>
              <p className="text-gray-500 text-sm">
                https://www.linkedin.com/in/example-profile/
              </p>
            </div>
            <div className="flex justify-end">
              <button className="p-2 rounded-lg bg-gray-200 flex mx-2 px-4"><Copy size={16} className="mt-1 mx-1" /><p>Copy</p></button>
              <button className="p-2 rounded-lg bg-red-100 flex mx-2 px-4"><EditIcon size={16} className="mt-1 mx-1" /><p>Disable</p></button>
              <button className="p-2 rounded-lg bg-red-600 flex mx-2 px-4"><Delete size={16} className="mt-1 mx-1" /><p>Delete</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
