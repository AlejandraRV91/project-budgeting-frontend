/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowPage() {
	const { index } = useParams();
	const [resource, setResource] = useState(null);
	let apiUrl = process.env.REACT_APP_API_DEV;

	useEffect(() => {
		fetch(`${apiUrl}/transactions/${index}`)
			.then((response) => response.json())
			.then((data) => {
				setResource(data);
			})
			.catch((error) => {
				console.error("Error fetching resource:", error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

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
		</div>
	);
}

export default ShowPage;
