import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// Validate required environment variables
if (!process.env.MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI is not set. Authentication will fail.");
}

if (!process.env.BETTER_AUTH_SECRET) {
    console.warn("⚠️ BETTER_AUTH_SECRET is not set. BetterAuth requires this in production.");
}

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
const db = client.db("sunCart");

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            enabled: !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
        },
    },
    secret: process.env.BETTER_AUTH_SECRET,
});