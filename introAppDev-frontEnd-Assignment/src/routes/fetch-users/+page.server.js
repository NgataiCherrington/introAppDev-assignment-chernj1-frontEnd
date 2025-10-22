import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

const API_BASE_URL = env.API_BASE_URL || " http://localhost:3000";


export const load = async ({ fetch }) => {
    try {
        const res = await fetch(`${API_BASE_URL}/api/users`);
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