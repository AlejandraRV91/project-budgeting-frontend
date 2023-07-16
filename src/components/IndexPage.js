/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./IndexPage.css";

function formatDate(dateString) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", options);
}

function IndexPage() {
	const [resources, setResources] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");

	let apiUrl = process.env.REACT_APP_API_DEV;

	function fetchData() {
		fetch(apiUrl + "/transactions")
			.then((response) => response.json())
			.then((data) => {
				setResources(data);
				const uniqueCategories = [
					...new Set(data.map((resource) => resource.category)),
				];
				setCategories(uniqueCategories);
			})
			.catch((error) => {
				console.error("Error fetching resources:", error);
			});
	}

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const totalBalance = resources.reduce((total, resource) => {
		const amount = parseFloat(resource.amount);
		return total + amount;
	}, 0);

	let balanceClass = "";
	if (totalBalance > 100) {
		balanceClass = "greenish";
	} else if (totalBalance > 0 && totalBalance <= 100) {
		balanceClass = "yellowish";
	} else {
		balanceClass = "reddish";
	}

	return (
		<div className="container" style={{ width: "70%" }}>
			<h1>Index Page</h1>
			<div className={`total-balance ${balanceClass}`}>
				Total Balance: {totalBalance}
			</div>
			<div className="form-group">
				<label htmlFor="categorySelect">Filter by Category:</label>
				<select
					className="form-control"
					id="categorySelect"
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}>
					<option value="">All Categories</option>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th>Date</th>
							<th>Item Name</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{resources
							.filter(
								//when a category is selected in  the <select>, the method.filter will filter the elements of this category.
								(resource) =>
									selectedCategory === "" ||
									resource.category === selectedCategory
							)
							.map((resource) => ( //.map returns a row of the table for each element filtered previously
								<tr key={resource.id}>
									<td>{formatDate(resource.date)}</td>
									<td>
										<Link
											to={`/transactions/${resource.id}`}>
											{resource.item_name}
										</Link>
									</td>
									<td>{resource.amount}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default IndexPage;
