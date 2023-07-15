/** @format */
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import IndexPage from "./components/IndexPage";
import ShowPage from "./components/ShowPage";
import NewTransactionPage from "./components/NewTransactionPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<></>}></Route>
					<Route
						path="/transactions"
						element={<IndexPage></IndexPage>}></Route>
					<Route
						path="/transactions/:index"
						element={<ShowPage></ShowPage>}></Route>
					<Route
						path="/transactions/:index/edit"
						element={<></>}></Route>
					<Route
						path="/transactions/new"
						element={
							<NewTransactionPage></NewTransactionPage>
						}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
