/** @format */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
	const { index } = useParams();
	const [item_name, setItemName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [from, setFrom] = useState("");
	const [category, setCategory] = useState("");
	const apiUrl = process.env.REACT_APP_API_DEV;
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${apiUrl}/transactions/${index}`)
			.then((response) => response.json())
			.then((data) => {
				setItemName(data.item_name);
				setAmount(data.amount);
				setDate(data.date);
				setFrom(data.from);
				setCategory(data.category);
			})
			.catch((error) => {
				console.error("Error fetching resource:", error);
			});
	}, [apiUrl, index]);

	function handleSubmit(e) {
		e.preventDefault();
		const updatedResource = {
			item_name,
			amount,
			date,
			from,
			category,
		};

		fetch(`${apiUrl}/transactions/${index}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedResource),
		})
			.then((response) => {
				if (response.status === 200) {
					navigate(`/transactions/${index}`);
				} else {
					console.error("Error updating resource");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<div className="container">
			<h2>Edit Resource</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="item-name">Item Name:</label>
					<input
						id="item-name"
						type="text"
						className="form-control"
						value={item_name}
						onChange={(e) => setItemName(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="amount">Amount:</label>
					<input
						id="amount"
						type="number"
						step=".1"
						className="form-control"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="date">Date:</label>
					<input
						id="date"
						type="date"
						className="form-control"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="from">From:</label>
					<input
						id="from"
						type="text"
						className="form-control"
						value={from}
						onChange={(e) => setFrom(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="category">Category:</label>
					<input
						id="category"
						type="text"
						className="form-control"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Update
				</button>
			</form>
		</div>
	);
}

export default EditPage;
