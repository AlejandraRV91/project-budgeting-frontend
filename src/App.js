/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import IndexPage from "./components/IndexPage";
import ShowPage from "./components/ShowPage";
import NewTransactionPage from "./components/NewTransactionPage";
import EditPage from "./components/EditPage";
import WelcomePage from "./components/Welcome";


import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar></Navbar>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<WelcomePage></WelcomePage>}></Route>
					<Route
						path="/transactions"
						element={<IndexPage></IndexPage>}></Route>
					<Route
						path="/transactions/:index"
						element={<ShowPage></ShowPage>}></Route>
					<Route
						path="/transactions/new"
						element={
							<NewTransactionPage></NewTransactionPage>
						}></Route>
					<Route
						path="/transactions/:index/edit"
						element={<EditPage></EditPage>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
