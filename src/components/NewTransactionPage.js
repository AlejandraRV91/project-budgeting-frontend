/** @format */

import React, { useState } from "react";

function NewTransactionPage() {
	const [item_name, setItemName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [from, setFrom] = useState("");
	const [category, setCategory] = useState("");

	let apiUrl = process.env.REACT_APP_API_DEV;

	const handleSubmit = (e) => {
		e.preventDefault();
		const newResource = {
			item_name,
			amount,
			date,
			from,
			category,
		};

		fetch(`${apiUrl}/transactions`, {
			method: "POST",
			body: JSON.stringify(newResource),
		})
			.then((response) => {
				if (response.status === 201) {
					console.log("Resource created successfully");
				} else {
					console.error("Error creating resource");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<h2>Create New Transaction</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Item Name:
					<input
						type="text"
						value={item_name}
						onChange={(e) => setItemName(e.target.value)}
					/>
				</label>
				<label>
					Amount:
					<input
						type="number"
                        step=".1"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</label>
				<label>
					Date:
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</label>
				<label>
					From:
					<input
						type="text"
						value={from}
						onChange={(e) => setFrom(e.target.value)}
					/>
				</label>
				<label>
					Category:
					<input
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</label>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default NewTransactionPage;
