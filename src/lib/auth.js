import { betterAuth } from "better-auth";
import clientPromise from "@/lib/mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

export const auth = betterAuth({
    database: mongodbAdapter(async () => {
        const client = await clientPromise;
        return client.db("Beef-Fest-Clients");
    }),

    emailAndPassword: {
        enabled: true,
    },

    baseURL: process.env.BETTER_AUTH_URL,

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});