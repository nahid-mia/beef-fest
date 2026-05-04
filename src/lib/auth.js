
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
client.connect().catch(err => {
    console.error("MongoDB connection failed:", err);
});
const db = client.db("beef-fest-db");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});