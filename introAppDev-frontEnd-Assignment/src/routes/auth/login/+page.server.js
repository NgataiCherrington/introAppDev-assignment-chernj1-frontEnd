import { env } from "$env/dynamic/private";
import { fail, redirect } from "@sveltejs/kit" ;

const API_BASE_URL = env.API_BASE_URL || "http://localhost:3000";

export