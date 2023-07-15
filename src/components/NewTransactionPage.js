/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransactionPage() {
	const [item_name, setItemName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [from, setFrom] = useState("");
	const [category, setCategory] = useState("");
	const apiUrl = process.env.REACT_APP_API_DEV;
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
        const id = Date.now();
		const newResource = {
            id,
			item_name,
			amount,
			date,
			from,
			category,
		};

		fetch(`${apiUrl}/transactions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newResource),
		})
			.then((response) => {
				if (response.status === 201) {
					navigate("/transactions/"+id);
				} else {
					console.error("Error creating resource");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}
	return (
		<div>
			<h2>Create New Transaction</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="item-name">Item Name:</label>
				<input
					id="item-name"
					type="text"
					value={item_name}
					onChange={(e) => setItemName(e.target.value)}
				/>

				<label htmlFor="amount">Amount:</label>
				<input
					id="amount"
					type="number"
					step=".1"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>

				<label htmlFor="date">Date:</label>
				<input
					id="date"
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>

				<label htmlFor="from">From:</label>
				<input
					id="from"
					type="text"
					value={from}
					onChange={(e) => setFrom(e.target.value)}
				/>

				<label htmlFor="category">Category:</label>
				<input
					id="category"
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>

				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default NewTransactionPage;
