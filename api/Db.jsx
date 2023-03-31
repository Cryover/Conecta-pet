import { Client } from "pg";

export const db = new Client({
  host: "my.database-server.com",
  port: 5334,
  database: "database-name",
  user: "database-user",
  password: "secretpassword!!",
});
