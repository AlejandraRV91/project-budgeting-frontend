/** @format */

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Navbar.css"

function Navbar() {
	const [totalBalance, setTotalBalance] = useState(0);
	const location = useLocation();
	let apiUrl = process.env.REACT_APP_API_DEV;

	useEffect(() => {
		if (!location.pathname.endsWith("/transactions")) {
			fetch(apiUrl + "/transactions")
				.then((response) => response.json())
				.then((data) => {
					const total = data.reduce(
						(acc, transaction) =>
							acc + parseFloat(transaction.amount),
						0
					);
					setTotalBalance(total);
				})
				.catch((error) => {
					console.error("Error fetching resources:", error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	return (
		<nav>
			<Link to="/transactions" className="navbar-brand">
				Budget App
			</Link>
			{location.pathname.endsWith("/transactions") ? (
				<></>
			) : (
				<div className="navbar-text">Total Balance: {totalBalance}</div>
			)}
			<Link to="/transactions/new" className="btn btn-primary ml-auto">
				NEW TRANSACTION
			</Link>
		</nav>
	);
}
export default Navbar;
