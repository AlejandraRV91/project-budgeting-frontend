/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";

import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<></>}></Route>
					<Route path="/transactions" element={<></>}></Route>
					<Route path="/transactions/:index" element={<></>}></Route>
					<Route
						path="/transactions/:index/edit"
						element={<></>}></Route>
					<Route path="/transactions/new" element={<></>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
