import { useState } from "react";
import "./App.css";

export default function App() {
	function handleCreateClick() {}

	return (
		<>
			<h1>Welcome to Habit Tracker</h1>
			<CreateForm />
		</>
	);
}

function CreateForm() {
	return (
		<div className="create-form">
			<h3>Create a new Habit!</h3>
			<form>
				<label for="createHabitName">Habit Name</label>
				<br />
				<input
					type="text"
					id="createHabitName"
					name="createHabitName"
				></input>
				<br></br>
				<input type="submit" value={"Create"}></input>
			</form>
		</div>
	);
}
