import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "ncnd1v3sn3",
    apiKey: process.env.REACT_APP_API_KEY,
});