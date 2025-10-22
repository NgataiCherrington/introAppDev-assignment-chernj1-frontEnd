import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";

const API_BASE_URL = env.API_BASE_URL || " http://localhost:3000";

export const actions = {
    register = async ({ request }) => {
        const formData = await request.formData();
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const password = formData.get("password");
        const dob = formData.get("dob");
        const role = formData.get("role");
        const user = { firstName, lastName, email, password, dob, role };

        try {
            const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await res.json();

            if(!res.ok) {
                return fail(409, {
                    success: false,
                    error: data.message,
                    errors: data.errors,
                    firstName,
                    lastName,
                    email,
                    password,
                    role
                });
            }

            return { success: true, message: data.message };
        } catch(err) {
            return fail(500, {
                success: false,
                error: err.message,
                firstName,
                lastName,
                email,
                password,
                role,
            });
        }
    } ,
};