/*eslint-disable react-hooks/exhaustive-deps
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
}

function IndexPage() {
	const [resources, setResources] = useState([]);
	let apiUrl = process.env.REACT_APP_API_DEV;

	function fetchData() {
		fetch(apiUrl + "/transactions")
			.then((response) => response.json())
			.then((data) => {
				setResources(data);
			})
			.catch((error) => {
				console.error("Error fetching resources:", error);
			});
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1>Index Page</h1>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Item Name</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{resources.map((resource) => (
						<tr key={resource.id}>
							<td>{formatDate(resource.date)}</td>
							<td>
								<Link to={`/transactions/${resource.id}`}>
									{resource.item_name}
								</Link>
							</td>
							<td>{resource.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default IndexPage;
