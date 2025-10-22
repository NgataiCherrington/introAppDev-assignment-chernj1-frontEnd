import { env } from "$env/dynamic/private";
import { fail, redirect } from "@sveltejs/kit" ;

const API_BASE_URL = env.API_BASE_URL || "http://localhost:3000";

export const actions = {
    login: async (event, cookies) => {
        const formData = await event.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const user = { email, password };

        let res, data;

        try {
            res = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              });

              data = await res.json();
        } catch(err) {
            return fail(500, {
                success: false,
                error: err.message,
                email,
                password,
            });
        }

        if(!res.ok) {
            return fail(401, {
                success: false,
                error: data.message,
                email,
                password,
            });
        }

        cookies.set("token", data.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60*60,
            path:"/",
        });

        redirect(303, "/");
    }
}