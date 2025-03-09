import PropTypes from "prop-types";
import { Home, Link, BarChart } from "lucide-react";

export function SideBar() {
	return (
		<aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg px-6 z-50">
			<h1 className="text-xl font-bold mb-4 mt-10 ">Link Shortener</h1>
			<nav className="space-y-2 mt-20">
				<NavItem label="Home" icon={<Home size={18} />} />
				<NavItem label="Links" icon={<Link size={18} className="text-blue-600" />} active />
				<NavItem label="Analytics" icon={<BarChart size={18} />} />
			</nav>
		</aside>
	);
}

function NavItem({ label, icon, active }) {
	return (
		<div
			className={`flex items-center py-2 rounded-md cursor-pointer space-x-3 ${active ? "bg-blue-100" : "hover:bg-gray-100"
				}`}
		>
			<span className={`${active ? "h-4 w-1 bg-blue-600 rounded-sm  " : "hover:bg-gray-100"}`}></span>
			<div
				className={`flex items-center rounded-lg cursor-pointer space-x-3`}
			>{icon}
				<span className="text-md font-medium">{label}</span>
			</div>

		</div>
	);
}

// PropTypes validation
NavItem.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.element,
	active: PropTypes.bool,
};
