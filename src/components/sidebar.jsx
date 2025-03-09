import PropTypes from "prop-types";

export function SideBar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4 flex flex-col">
      {/* Sidebar Title */}
      <h1 className="text-xl font-bold mb-4">Bitly</h1>

      {/* Navigation */}
      <nav className="space-y-2 flex-grow">
        <NavItem label="Home" />
        <NavItem label="Links" active />
        <NavItem label="QR Codes" />
        <NavItem label="Pages" />
        <NavItem label="Analytics" />
        <NavItem label="Settings" />
      </nav>

      {/* Create New Button */}
      <button className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Create New
      </button>
    </aside>
  );
}

function NavItem({ label, active, trial }) {
  return (
    <div
      className={`p-2 rounded-lg cursor-pointer flex justify-between items-center ${
        active ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <span>{label}</span>
      {trial && (
        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">
          TRY IT
        </span>
      )}
    </div>
  );
}

// PropTypes validation
NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  trial: PropTypes.bool,
};
