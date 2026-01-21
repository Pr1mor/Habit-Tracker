import { useState } from "react";
import "./App.css";

export default function App() {
	const [habits, setHabits] = useState([]);

	function handleAddHabit(nextHabit) {
		setHabits((prev) => [...prev, nextHabit]);
	}

	const habitItems = habits.map((habit) => {
		return <li key={habit}>{habit}</li>;
	});

	return (
		<>
			<h1>Welcome to Habit Tracker</h1>
			<div className="habitForm">
				<h3>Create a new Habit!</h3>
				<CreateForm onAddHabit={handleAddHabit} />
				<ol>{habitItems}</ol>
			</div>
		</>
	);
}

function CreateForm({ onAddHabit }) {
	const [habitName, setHabitName] = useState("");

	function handleSubmit(e) {
		e.preventDefault(); // stops the page from refreshing
		const trimmed = habitName.trim();
		if (!trimmed) return;

		onAddHabit(trimmed); // performed basic validation before sending to the parent component to add into the habits array
		setHabitName(""); // making it empty once again
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="createHabitName">Habit Name</label>
			<br />
			<input
				type="text"
				id="createHabitName"
				name="createHabitName"
				value={habitName}
				onChange={(e) => setHabitName(e.target.value)} // onChange is required to update the habitName as user is typing otherwise it won't show in the box since we are only displaying habitName, but habitName = "" by default unless we update it as user it typing
			></input>
			<br></br>
			<input type="submit" value={"Create"}></input>
		</form>
	);
}
