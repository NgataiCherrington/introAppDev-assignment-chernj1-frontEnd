import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

const API_BASE_URL = "https://ngatai-introappdev-backend.onrender.com" || "http://localhost:3000";

export const load = async ({ fetch }) => {
  try {
    console.log("Fetching team from:", API_BASE_URL);

    const res = await fetch(`${API_BASE_URL}/api/teams`);

    console.log("Response status:", res.status);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const teams = await res.json();

    return {
      teams,
      error: null,
    };
  } catch (err) {
    return {
      teams: [],
      error: err.message,
    };
  }
};