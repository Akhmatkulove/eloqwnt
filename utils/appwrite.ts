import { Client, Databases } from "appwrite";
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT;
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID

export const databases = new Databases(client);
