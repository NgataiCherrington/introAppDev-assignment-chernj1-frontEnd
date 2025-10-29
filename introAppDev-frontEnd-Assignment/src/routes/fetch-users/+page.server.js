import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

const PUBLIC_API_BASE_URL = "https://ngatai-introappdev-backend.onrender.com" || "http://localhost:3000";


export const load = async ({ fetch }) => {
    try {
        console.log("Fetching users from:", PUBLIC_API_BASE_URL);

        const res = await fetch(`${PUBLIC_API_BASE_URL}/api/users`);

        console.log("Response status:", res.status);
        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
        const users = await res.json();

        return {
            users,
            error: null,
        };
    } catch (err) {
        return {
            users: [],
            error: err.message,
        };
    }
};

export const actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get("id");

        try {
            const res = await fetch(`${PUBLIC_API_BASE_URL}/api/users/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            return { success: true, message: data.message };
        } catch(err) {
            return { success: false, error: err.message };
        }
    },
};