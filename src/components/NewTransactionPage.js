/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransactionPage() {
	const [item_name, setItemName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [from, setFrom] = useState("");
	const [category, setCategory] = useState("");
	const [isWithdrawal, setIsWithdrawal] = useState(false);
	const apiUrl = process.env.REACT_APP_API_DEV;
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const id = Date.now();
		const newResource = {
			id,
			item_name,
			amount: isWithdrawal ? -Math.abs(amount) : Math.abs(amount),
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
					navigate("/transactions/" + id);
				} else {
					console.error("Error creating resource");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<div className="container">
			<h2>Create New Transaction</h2>
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

				<div className="form-group form-check">
					<input
						id="is-withdrawal"
						type="checkbox"
						className="form-check-input"
						checked={isWithdrawal}
						onChange={(e) => setIsWithdrawal(e.target.checked)}
					/>
					<label htmlFor="is-withdrawal" className="form-check-label">
						Withdrawal
					</label>
				</div>

				<button type="submit" className="btn btn-primary">
					Create
				</button>
			</form>
		</div>
	);
}

export default NewTransactionPage;
