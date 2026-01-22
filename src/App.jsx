import { useState } from "react";
import "./App.css";

export default function App() {
	const [habits, setHabits] = useState([]);

	function handleAddHabit(nextHabit) {
		setHabits((prev) => [...prev, nextHabit]);
		// console.log(habits);
	}

	const habitItems = habits.map((habit) => {
		return (
			<li key={habit.id}>
				<div>Habit Name: {habit.name}</div>
				<div>Created On: {habit.createdAt.toLocaleDateString()}</div>
				<div>Completed {habit.completedDates.length} times</div>
			</li>
		);
	});

	return (
		<>
			<h1>Welcome to Habit Tracker</h1>
			<div className="habitForm">
				<h3>Create a new Habit!</h3>
				<CreateForm onAddHabit={handleAddHabit} />
				<ul>{habitItems}</ul>
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

		let habit = {
			id: crypto.randomUUID(),
			name: trimmed,
			createdAt: new Date(),
			completedDates: [],
		};

		onAddHabit(habit); // performed basic validation before sending to the parent component to add into the habits array
		setHabitName(""); // making it empty once again
	}

	return (
		<form id="inputForm" onSubmit={handleSubmit}>
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
