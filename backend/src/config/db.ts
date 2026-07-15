import { Pool } from 'pg';

const connectDB = (url: string) => {
    return new Pool({
        connectionString: url,
        host: "localhost",
    });
}

export default connectDB;