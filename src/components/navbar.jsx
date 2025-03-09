import { useState } from "react";
import { User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white p-4 shadow-sm flex items-center justify-between h-16">
      {/* Empty div to push profile to the right */}
      <div></div>

      {/* Profile Dropdown (Top-Right Corner) */}
      <div className="relative ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg"
        >
          <User className="w-6 h-6 text-gray-700" />
          <span className="font-medium">Ramadhan</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg">
            <div className="p-4 border-b">
              <p className="font-medium">Ramadhan</p>
              <p className="text-sm text-gray-500">rahulramadhan60@gmail.com</p>
            </div>
            <div className="p-4 border-b">
              <p className="text-sm text-gray-500">o_4hruc5uhpt</p>
              <button className="bg-blue-600 text-white py-1 px-3 rounded-lg text-sm">Upgrade</button>
            </div>
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Support</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">API Documentation</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Webinars</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bitly Terms</li>
            </ul>
            <div className="p-4 border-t text-red-600 hover:bg-gray-100 cursor-pointer text-center">
              Sign out
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
