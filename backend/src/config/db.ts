//function to connect to the database

import { Pool } from "pg";

class connectDB {
    connect (url: string) {
        return new Pool({
            connectionString: url,
            host: "localhost",
        });
    }
}

export default new connectDB();