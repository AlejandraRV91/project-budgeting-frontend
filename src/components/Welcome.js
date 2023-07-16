/** @format */


import { Link } from "react-router-dom";

const WelcomePage = () => {
	return (
		<div>
			<h1>Welcome to Budgeting App</h1>
			<p>
				This project is the frontend of a transaction management
				application that allows you to create, read, update, and delete
				transactions. It provides the user with an interface for
				interacting with the transaction API, which was created
				specifically for this project.
			</p>
			<Link to="/transactions">Go to Transactions</Link>
		</div>
	);
};

export default WelcomePage;
