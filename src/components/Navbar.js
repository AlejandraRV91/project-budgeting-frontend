/** @format */

import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<span>Budget App</span>
			<Link to="/transactions/new">NEW TRANSACTION</Link>
		</nav>
	);
}

export default Navbar;
