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

export const actions = {
    create: async ({ request, cookies }) => {
        const token = cookies.get("token");

        const formData = await request.formData();
        const teamName = formData.get("teamName");
        const team = { teamName };

        try {
            const res = await fetch(`${API_BASE_URL}/api/teams`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(team)
            });

            const data = await res.json();

            if(!res.ok) {
                return fail(409, {
                    error: data.message,
                    errors: data.errors,
                    teamName
                });
            }

            return {
                success: true,
                message: data.message,
            };
        } catch(err) {
            return fail(500, {
                success: false,
                error: err.message,
                teamName,
            });
        }
    },
};