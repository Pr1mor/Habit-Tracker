import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "https://github.com/Pr1mor/Habit-Tracker/", // so that I can deloy my website on github
});
