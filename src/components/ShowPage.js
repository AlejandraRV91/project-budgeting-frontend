/** @format */

import { useEffect, useState } from "react";
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
		<div className="container">
			<h2>Resource Details</h2>
			<div className="card">
				<div className="card-body">
					<p className="card-text">ID: {resource.id}</p>
					<p className="card-text">Item Name: {resource.item_name}</p>
					<p className="card-text">Amount: {resource.amount}</p>
					<p className="card-text">Date: {resource.date}</p>
					<p className="card-text">From: {resource.from}</p>
					<p className="card-text">Category: {resource.category}</p>
				</div>
			</div>
			<Link
				to={`/transactions/${index}/edit`}
				className="btn btn-primary">
				Edit
			</Link>
			<button onClick={handleDelete} className="btn btn-danger">
				Delete
			</button>
		</div>
	);
}

export default ShowPage;
