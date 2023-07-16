/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ShowPage() {
	const { index } = useParams();
	const [resource, setResource] = useState(null);
	const apiUrl = process.env.REACT_APP_API_DEV;
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${apiUrl}/transactions/${index}`)
			.then((response) => response.json())
			.then((data) => {
				setResource(data);
			})
			.catch((error) => {
				console.error("Error fetching resource:", error);
			});
	}, [apiUrl, index]);

	const handleDelete = () => {
		fetch(`${apiUrl}/transactions/${index}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (response.status === 200) {
					navigate("/transactions");
				} else {
					console.error("Error deleting resource");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	if (!resource) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h2>Resource Details</h2>
			<p>ID: {resource.id}</p>
			<p>Item Name: {resource.item_name}</p>
			<p>Amount: {resource.amount}</p>
			<p>Date: {resource.date}</p>
			<p>From: {resource.from}</p>
			<p>Category: {resource.category}</p>

			<Link to={`/transactions/${index}/edit`}>Edit</Link>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

export default ShowPage;
